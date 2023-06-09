import { useDispatch, useSelector } from 'react-redux';
import { contractSelector, setBalance } from '@/store/reducers/contract/reducer';
import { useIsActiveBalanceData } from '@/logic/hooks/useIsActiveBalanceData';
import usePrepareCompanyContract from './usePrepareCompanyContract';
import { ethers } from 'ethers';
import { useState } from 'react';

const useStartStopStream = (who) => {
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState('');
  const { decimalsToken } = useSelector(contractSelector);
  const dispatch = useDispatch();

  const {
    isActive,
    setIsActive,
    amountOfStream,
    isLoading: isLoadingBalance,
  } = useIsActiveBalanceData(who);

  const { signedCompanyContract, contractCompany } = usePrepareCompanyContract();

  const refreshBalance = async () => {
    try {
      const bal = await contractCompany.currentBalanceContract();
      const balan = Number(ethers.utils.formatUnits(bal, decimalsToken)).toFixed(2);
      dispatch(setBalance(balan));
    } catch (error) {
      console.log(error);
    }
  };

  const hadleStartStream = async () => {
    try {
      setNotif('');
      setIsLoading(true);
      const startStream = await signedCompanyContract.start(who);
      await startStream.wait();
      setIsActive(true);
      setNotif('Success!');
    } catch (error) {
      console.error('An error occurred:', error);
      setNotif('An error occurred!');
    } finally {
      setIsLoading(false);
    }
  };

  const hadleStopStream = async () => {
    try {
      setNotif('');
      setIsLoading(true);
      const stopStream = await signedCompanyContract.finish(who);
      await stopStream.wait();
      await refreshBalance();
      setIsActive(false);
      setNotif('Success!');
    } catch (error) {
      console.error('An error occurred:', error);
      setNotif('An error occurred!');
    } finally {
      setIsLoading(false);
    }
  };
  const handleWithdrawMoneyEmployee = async () => {
    try {
      setNotif('');
      setIsLoading(true);
      const withdraw = await signedCompanyContract.withdrawEmployee();
      const tx = await withdraw.wait();
      console.log('RESULT:', tx);
      await refreshBalance();
      setNotif('Success!');
    } catch (error) {
      console.error('An error occurred:', error);
      setNotif('An error occurred!');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    notif,
    isLoadingBalance,
    isActive,
    amountOfStream,
    hadleStartStream,
    hadleStopStream,
    handleWithdrawMoneyEmployee,
  };
};

export default useStartStopStream;
