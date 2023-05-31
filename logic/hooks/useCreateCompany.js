import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAddress } from "@/store/reducers/contract/reducer";
import postRecord from "../serverFunc/postRecord";
import { FACTORY_ABI, FACTORY_ADDRESS } from "@/web3/contractFactory";
import getRecordByName from "../serverFunc/getRecordByName";
import getContractSigner from "@/logic/functions/getSignedContract";

const useCreateCompany = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [existedName, setExistedName] = useState("");
  const dispatch = useDispatch();

  const handleCreateCompany = async (name, setActiveTab) => {
    try {
      const { contractSigner } = await getContractSigner(
        FACTORY_ABI,
        FACTORY_ADDRESS
      );
      const record = await getRecordByName(name);
      if (record) {
        setExistedName(
          `Company with name: "${name}" already exists. Choose another name, pls`
        );
        setTimeout(() => setExistedName(""), 3000);
      } else {
        setIsLoading(true);
        const tx = await contractSigner.createCompany(name);
        const response = await tx.wait();
        await postRecord(name, response.logs[0].address);
        dispatch(setAddress(response.logs[0].address));
        setIsLoading(false);
        setActiveTab("Set Token");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { isLoading, existedName, handleCreateCompany };
};

export default useCreateCompany;
