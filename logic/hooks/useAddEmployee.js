import { useState } from 'react';
import { ethers } from 'ethers';
import { useDispatch, useSelector } from 'react-redux';
import {
  contractSelector,
  setAmountEmployee,
  setArrEmployee,
} from '@/store/reducers/contract/reducer';
import usePrepareCompanyContract from './usePrepareCompanyContract';

const useAddEmployee = (setActive, addressUserRef, rateRef) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState('');
  const { decimalsToken } = useSelector(contractSelector);
  const { contractCompany, signedCompanyContract } = usePrepareCompanyContract();

  const handleNewUser = async () => {
    try {
      setNotif('');
      setIsLoading(true);
      const addUser = await signedCompanyContract.addEmployee(
        addressUserRef.current.value,
        ((rateRef.current.value / 60 / 60) * 10 ** decimalsToken).toFixed(0)
      );
      await addUser.wait();
      // Refresh array of employees
      const amountEmployee = (await contractCompany.amountEmployee()).toNumber();
      dispatch(setAmountEmployee(amountEmployee));

      let employeeArr = [];
      for (let i = 0; i < amountEmployee; i++) {
        const addrEmpl = await contractCompany.allEmployeeList(i);
        const result = await contractCompany.allEmployee(addrEmpl);
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
      setNotif('Success!');
      setActive(false);
    } catch (error) {
      console.error('An error occurred:', error);
      setNotif('An error occurred!');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleNewUser,
    isLoading,
    notif,
    setNotif,
  };
};

export default useAddEmployee;
