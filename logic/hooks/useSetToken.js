import { useState } from "react";
import { setToken } from "@/store/reducers/contract/reducer";
import { useDispatch } from "react-redux";
import usePrepareCompanyContract from "./usePrepareCompanyContract";

const useSetToken = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState("");
  const dispatch = useDispatch();

  const { signedCompanyContract } = usePrepareCompanyContract();
  const handleSetToken = async (tokenAddress, setActiveTab) => {
    try {
      setNotif("");
      setIsLoading(true);
      const tx = await signedCompanyContract.setToken(tokenAddress);
      await tx.wait();
      dispatch(setToken(tokenAddress));
      setNotif("Success!");
      setActiveTab("Set Admin");
    } catch (error) {
      console.error("An error occurred:", error);
      setNotif("An error occurred!");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, notif, handleSetToken };
};

export default useSetToken;
