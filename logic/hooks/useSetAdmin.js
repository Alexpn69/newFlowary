import { useState } from "react";
import { contractSelector, setAdmin } from "@/store/reducers/contract/reducer";
import { useDispatch, useSelector } from "react-redux";
import connectContract from "../functions/connectContract";
import { useRouter } from "next/navigation";
import usePrepareCompanyContract from "./usePrepareCompanyContract";

const useSetAdmin = () => {
  const [loadingAdmin, setLoading] = useState(false);
  const { address } = useSelector(contractSelector);
  const dispatch = useDispatch();
  const router = useRouter();

  const { signedCompanyContract } = usePrepareCompanyContract();

  const handleSetAdmin = async (adminAddress) => {
    try {
      setLoading(true);
      const tx = await signedCompanyContract.changeAdmin(adminAddress);
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
