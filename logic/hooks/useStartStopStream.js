import { useDispatch, useSelector } from "react-redux";
import {
  contractSelector,
  setBalance,
} from "@/store/reducers/contract/reducer";
import { useIsActiveBalanceData } from "@/logic/hooks/useIsActiveBalanceData";
import usePrepareCompanyContract from "./usePrepareCompanyContract";
import { ethers } from "ethers";

const useStartStopStream = (who) => {
  const { decimalsToken } = useSelector(contractSelector);
  const dispatch = useDispatch();

  const { isActive, setIsActive, amountOfStream, isLoading } =
    useIsActiveBalanceData(who);
  const { signedCompanyContract, contractCompany } =
    usePrepareCompanyContract();

  const hadleStartStream = async () => {
    try {
      const startStream = await signedCompanyContract.start(who);
      await startStream.wait();
      setIsActive(true);
    } catch (error) {
      console.log(error);
    }
  };

  const hadleStopStream = async () => {
    try {
      const stopStream = await signedCompanyContract.finish(who);
      await stopStream.wait();
      const bal = await contractCompany.currentBalanceContract();
      const balan = Number(
        ethers.utils.formatUnits(bal, decimalsToken)
      ).toFixed(2);
      dispatch(setBalance(balan));
      setIsActive(false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isLoading,
    isActive,
    amountOfStream,
    hadleStartStream,
    hadleStopStream,
  };
};

export default useStartStopStream;
