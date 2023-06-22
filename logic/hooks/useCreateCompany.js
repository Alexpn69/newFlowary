import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAddress } from "@/store/reducers/contract/reducer";
import { FACTORY_ABI, FACTORY_ADDRESS } from "@/web3/contractFactory";
import getContractSigner from "@/logic/functions/getSignedContract";
import postRecordTest from "../serverFunc/postRecordTest";
import getRecordTest from "../serverFunc/getRecordTest";

const useCreateCompany = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notif, setNotif] = useState("");
  const dispatch = useDispatch();

  const handleCreateCompany = async (name, setActiveTab) => {
    try {
      setIsLoading(true);
      setNotif("");
      const { contractSigner } = await getContractSigner(
        FACTORY_ABI,
        FACTORY_ADDRESS
      );
      const record = await getRecordTest(name);
      if (record) {
        setNotif(`Company ${name} already exists. Choose another name`);
      } else {
        const tx = await contractSigner.createCompany(name);
        const response = await tx.wait();
        await postRecordTest(name, response.logs[0].address);
        dispatch(setAddress(response.logs[0].address));
        setNotif("Success!");
        setActiveTab("Set Token");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setNotif("An error occurred!");
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, notif, handleCreateCompany };
};

export default useCreateCompany;
