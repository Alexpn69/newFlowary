import { useState } from "react";
import { setToken } from "@/store/reducers/contract/reducer";
import { useDispatch } from "react-redux";
import usePrepareCompanyContract from "./usePrepareCompanyContract";

const useSetToken = () => {
  const [loadingToken, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { signedCompanyContract } = usePrepareCompanyContract();

  const handleSetToken = async (tokenAddress, setActiveTab) => {
    try {
      setLoading(true);
      const tx = await signedCompanyContract.setToken(tokenAddress);
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
