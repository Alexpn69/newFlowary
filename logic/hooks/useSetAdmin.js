import { useState } from "react";
import { contractSelector, setAdmin } from "@/store/reducers/contract/reducer";
import { useSelector } from "react-redux";
import getContractSigner from "./usePrepareContract";
import { CONTRACT_INSTANCE_ABI } from "@/web3/contractInstanceAbi";
import connectContract from "../functions/connectContract";

const useSetAdmin = () => {
  const [loadingAdmin, setLoading] = useState(false);
  const { address } = useSelector(contractSelector);
  const handleSetAdmin = async (adminAddress, dispatch, router) => {
    try {
      const contractSigner = await getContractSigner(
        CONTRACT_INSTANCE_ABI,
        address
      );
      setLoading(true);
      const tx = await contractSigner.changeAdmin(adminAddress);
      await tx.wait();
      dispatch(setAdmin(adminAddress));
      await connectContract(address, dispatch);
      router.push("/internalstaff");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return { loadingAdmin, handleSetAdmin };
};

export default useSetAdmin;
