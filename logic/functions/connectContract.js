import { ethers } from "ethers";
import defaultProvider from "../../web3/defaultProvider";

import {
  setArrOutsource,
  setArrEmployee,
  setSymbolToken,
  setContractInfo,
  setAddress,
} from "../../store/reducers/contract/reducer";
import { CONTRACT_INSTANCE_ABI } from "@/web3/contractInstanceAbi";
import { TOKEN_ABI } from "@/web3/tokenAbi";

const connectContract = async (address, dispatch) => {
  if (!address) return;
  try {
    const contract = new ethers.Contract(
      address,
      CONTRACT_INSTANCE_ABI,
      defaultProvider
    );
    dispatch(setAddress(address)); // TODO диспатчить адрес по кнопке
    /* get contract info */
    const admin = await contract.administrator();
    const name = await contract.name();
    const owner = await contract.owner();
    const token = await contract.token();
    const decimalsToken = (await contract.getDecimals()).toNumber();
    const hl = (await contract.tokenLimitMaxHoursPerPerson()).toNumber();
    const amountEmployee = (await contract.amountEmployee()).toNumber();
    const liquidation = await contract.liqudation();
    let balance;
    if (liquidation === false) {
      let contractBalance = await contract.currentBalanceContract();
      balance = Number(
        ethers.utils.formatUnits(contractBalance, decimalsToken)
      ).toFixed(2);
    } else {
      let contractBalance = await contract._totalDebt();
      balance =
        "-" +
        Number(
          ethers.utils.formatUnits(contractBalance, decimalsToken)
        ).toFixed(2);
    }

    dispatch(
      setContractInfo({
        admin,
        name,
        owner,
        token,
        decimalsToken,
        hl,
        balance,
        amountEmployee,
        liquidation,
      })
    );

    /* get employee info */
    const employeeArr = [];
    for (let i = 0; i < amountEmployee; i++) {
      const addrEmpl = await contract.allEmployeeList(i);
      const result = await contract.allEmployee(addrEmpl);
      const employee = {
        who: result.who,
        rate: (
          Number(ethers.utils.formatUnits(result.flowRate, decimalsToken)) *
          60 *
          60
        ).toFixed(2),
      };
      employeeArr.push(employee);
    }
    dispatch(setArrEmployee(employeeArr));

    /* get outsource info */
    const amountOutsources = (await contract.OutsourceID()).toNumber();
    const outsourcesArr = [];
    for (let i = 0; i < amountOutsources; i++) {
      const result = await contract.listOutsource(i);
      const outsourceJob = {
        taskName: result.task,
        who: result.who,
        startDate: Number(result.startAt),
        deadline: Number(result.deadline),
        wage: Number(
          ethers.utils.formatUnits(result.wage, decimalsToken)
        ).toFixed(2),
        status: Number(result.status),
        id: i,
      };
      outsourcesArr.push(outsourceJob);
    }
    dispatch(setArrOutsource(outsourcesArr));
    /* get info about symbol of token which uses in contract */
    const contractToken = new ethers.Contract(
      token,
      TOKEN_ABI,
      defaultProvider
    );
    const symbolToken = await contractToken.symbol();
    dispatch(setSymbolToken(symbolToken));
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default connectContract;
