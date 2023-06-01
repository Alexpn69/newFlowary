import { ethers } from "ethers";
import { useState, useEffect } from "react";

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
  const [error, setError] = useState(null);

  const handleRateChange = async () => {
    setIsLoading(true);

    try {
      const newRate = (
        (newRateRef.current.value / 60 / 60) *
        10 ** decimalsToken
      ).toFixed(0);
      const changeRate = await signedCompanyContract.modifyRate(who, newRate);
      await changeRate.wait();

      const amountEmployee = (
        await contractCompany.amountEmployee()
      ).toNumber();
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
    } catch (error) {
      setError("Something've gone wrong");
      setTimeout(() => {
        setError(null);
      }, 2000);
    } finally {
      setIsLoading(false);
      setActive(false);
    }
  };

  return { handleRateChange, isLoading, error };
};

export default useRateChange;
