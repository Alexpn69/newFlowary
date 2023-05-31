import { useState } from "react";
import { ethers } from "ethers";

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
  const [isLoadingDel, setIsLoadingDel] = useState(false);
  const [errorDel, setErrorDel] = useState(null);

  const handleDelete = async () => {
    try {
      setIsLoadingDel(true);
      const deleteUser = await signedCompanyContract.deleteEmployee(who);
      await deleteUser.wait();

      // Refresh array of employees
      const amountEmployee = (
        await contractCompany.amountEmployee()
      ).toNumber();
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
    } catch (error) {
      console.log(error);
      setErrorDel("Something've gone wrong");
      setTimeout(() => {
        setErrorDel(null);
      }, 2000);
    } finally {
      setIsLoadingDel(false);
      setActive(false);
    }
  };

  return { isLoadingDel, errorDel, handleDelete };
};

export default useDeleteEmployee;
