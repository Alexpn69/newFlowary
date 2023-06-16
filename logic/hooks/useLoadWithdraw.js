import {
  contractSelector,
  setBalance,
} from "@/store/reducers/contract/reducer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrepareCompanyContract from "./usePrepareCompanyContract";
import usePrepareTokenContract from "./usePrepareTokenContract";
import { ethers } from "ethers";

const useLoadWithdraw = (setActive) => {
  const dispatch = useDispatch();
  const [isLoadingDeposit, setIsLoadingDeposit] = useState(false);
  const [isLoadingWithdraw, setIsLoadingWithdraw] = useState(false);
  const [notif, setNotif] = useState("");
  const { signedCompanyContract, contractCompany } =
    usePrepareCompanyContract();
  const { signedTokenContract } = usePrepareTokenContract();
  const { address, decimalsToken } = useSelector(contractSelector);

  const refreshBalance = async () => {
    try {
      const bal = await contractCompany.currentBalanceContract();
      const balan = Number(
        ethers.utils.formatUnits(bal, decimalsToken)
      ).toFixed(2);
      dispatch(setBalance(balan));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMoney = async (money) => {
    try {
      setIsLoadingDeposit(true);
      setNotif("");
      const deposit = await signedTokenContract.transfer(
        address,
        BigInt(Math.ceil(money * 10 ** decimalsToken))
      );
      const tx = await deposit.wait();
      console.log("transfer:", tx);

      await refreshBalance();

      setNotif("Success!");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingDeposit(false);
      setActive(false);
    }
  };

  const handleWithdrawMoney = async () => {
    try {
      setIsLoadingDeposit(true);
      setNotif("");
      const withdraw = await signedCompanyContract.withdrawTokens();
      const tx = await withdraw.wait();
      console.log("transfer:", tx);

      await refreshBalance();

      setNotif("Success!");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingWithdraw(false);
    }
  };

  return {
    notif,
    isLoadingDeposit,
    isLoadingWithdraw,
    handleLoadMoney,
    handleWithdrawMoney,
  };
};

export default useLoadWithdraw;
