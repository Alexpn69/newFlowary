import { useState } from "react";
import { contractSelector, setToken } from "@/store/reducers/contract/reducer";
import { useSelector } from "react-redux";
import getContractSigner from "./usePrepareContract";
import { CONTRACT_INSTANCE_ABI } from "@/web3/contractInstanceAbi";

const useSetToken = () => {
  const [loadingToken, setLoading] = useState(false);
  const { address } = useSelector(contractSelector);
  const handleSetToken = async (tokenAddress, setActiveTab, dispatch) => {
    try {
      const contractSigner = await getContractSigner(
        CONTRACT_INSTANCE_ABI,
        address
      );
      console.log("ADDD CONT", tokenAddress);

      setLoading(true);
      const tx = await contractSigner.setToken(tokenAddress);
      await tx.wait();
      setLoading(false);

      dispatch(setToken(tokenAddress));
      setActiveTab("Set Admin");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return { loadingToken, handleSetToken };
};

export default useSetToken;
