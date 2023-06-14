import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAddress } from "@/store/reducers/contract/reducer";
import postRecord from "../serverFunc/postRecord";
import { FACTORY_ABI, FACTORY_ADDRESS } from "@/web3/contractFactory";
import getRecordByName from "../serverFunc/getRecordByName";
import getContractSigner from "@/logic/functions/getSignedContract";

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
      const record = await getRecordByName(name);
      if (record) {
        setNotif(`Company ${name} already exists. Choose another name`);
      } else {
        const tx = await contractSigner.createCompany(name);
        const response = await tx.wait();
        await postRecord(name, response.logs[0].address);
        console.log("add", response.logs[0].address);
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
