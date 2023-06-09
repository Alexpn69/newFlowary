import { useState } from 'react';
import { ethers } from 'ethers';

const useDeleteEmployee = (
  signedCompanyContract,
  contractCompany,
  who,
  decimalsToken,
  dispatch,
  setAmountEmployee,
  setArrEmployee,
  setActive
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState('');

  const handleDelete = async () => {
    try {
      setNotif('');
      setIsLoading(true);
      const deleteUser = await signedCompanyContract.deleteEmployee(who);
      await deleteUser.wait();

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
      setActive(false);
      setNotif('Success!');
    } catch (error) {
      console.error('An error occurred:', error);
      setNotif('An error occurred!');
    } finally {
      setIsLoading(false);
      setNotif('An error occurred!');
    }
  };

  return { handleDelete, isLoading, notif, setNotif };
};

export default useDeleteEmployee;
