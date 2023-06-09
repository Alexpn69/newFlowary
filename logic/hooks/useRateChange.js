import { ethers } from 'ethers';
import { useState } from 'react';

const useRateChange = (
  signedCompanyContract,
  newRateRef,
  who,
  contractCompany,
  decimalsToken,
  dispatch,
  setArrEmployee,
  setActive
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState('');

  const handleRateChange = async () => {
    try {
      setNotif('');
      setIsLoading(true);
      const newRate = ((newRateRef.current.value / 60 / 60) * 10 ** decimalsToken).toFixed(0);
      const changeRate = await signedCompanyContract.modifyRate(who, newRate);
      await changeRate.wait();
      const amountEmployee = (await contractCompany.amountEmployee()).toNumber();
      // Refresh array of employees
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

      // Update state or dispatch actions with the new employee array or any other necessary data
      setNotif('Success!');
      setActive(false);
    } catch (error) {
      console.error('An error occurred:', error);
      setNotif('An error occurred!');
    } finally {
      setIsLoading(false);
    }
  };

  return { handleRateChange, isLoading, notif, setNotif };
};

export default useRateChange;
