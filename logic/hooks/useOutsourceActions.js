import { useState } from "react";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import {
  contractSelector,
  setArrOutsource,
  setBalance,
} from "@/store/reducers/contract/reducer";
import usePrepareCompanyContract from "./usePrepareCompanyContract";

const useOutsourceActions = (
  id,
  setActive,
  addressUserRef,
  taskNameRef,
  wageRef,
  timeRef
) => {
  const { decimalsToken } = useSelector(contractSelector);
  const { signedCompanyContract, contractCompany } =
    usePrepareCompanyContract();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState("");

  const refreshOutsourceArray = async () => {
    try {
      const amountOutsources = (await contractCompany.OutsourceID()).toNumber();
      let outsourcesArr = [];
      for (let i = 0; i < amountOutsources; i++) {
        const result = await contractCompany.listOutsource(i);
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
    } catch (error) {
      console.log(error);
    }
  };

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

  const handleClaim = async () => {
    try {
      setIsLoading(true);
      setNotif("");
      const claim = await signedCompanyContract.claimFinish(
        id,
        "i've done everything"
      );
      await claim.wait();
      await refreshOutsourceArray();
      setNotif("Success!");
    } catch (error) {
      console.log(error);
      setNotif("An error occurred!");
    } finally {
      setIsLoading(false);
      setActive(false);
    }
  };

  const handleFinishJob = async () => {
    try {
      setIsLoading(true);
      const finishJob = await signedCompanyContract.finishOutsource(id);
      await finishJob.wait();
      await refreshOutsourceArray();
      await refreshBalance();
    } catch (error) {
      console.log(error);
      setNotif("An error occurred!");
    } finally {
      setIsLoading(false);
      setActive(false);
    }
  };

  const hadleAddNewTask = async () => {
    try {
      setIsLoading(true);
      setNotif("");
      const addOutsource = await signedCompanyContract.createOutsourceJob(
        addressUserRef.current.value,
        taskNameRef.current.value,
        BigInt(wageRef.current.value * 10 ** decimalsToken),
        timeRef.current.value * 3600,
        30
      );
      const res = await addOutsource.wait();
      console.log(res);
      await refreshOutsourceArray();
      setNotif("Success!");
    } catch (error) {
      console.log(error);
      setNotif("An error occurred!");
    } finally {
      setIsLoading(false);
      setActive(false);
    }
  };

  return {
    isLoading,
    notif,
    setNotif,
    handleClaim,
    handleFinishJob,
    hadleAddNewTask,
  };
};

export default useOutsourceActions;
