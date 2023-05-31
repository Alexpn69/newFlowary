import { setAddress } from "@/store/reducers/contract/reducer";
import postRecord from "../serverFunc/postRecord";
import getContractSigner from "./getSignedContract";
import { FACTORY_ABI, FACTORY_ADDRESS } from "@/web3/contractFactory";
import getRecordByName from "../serverFunc/getRecordByName";

const handleCreateCompany = async (
  name,
  setExistedName,
  dispatch,
  setIsLoading,
  setActiveTab
) => {
  try {
    const { contractSigner } = await getContractSigner(
      FACTORY_ABI,
      FACTORY_ADDRESS
    );
    const record = await getRecordByName(name);
    if (record) {
      return (
        setExistedName(
          `Company with name: "${name}" already exists. Choose another name, pls`
        ),
        setTimeout(() => setExistedName(""), 3000)
      );
    } else setIsLoading(true);
    const tx = await contractSigner.createCompany(name);
    const response = await tx.wait();
    await postRecord(name, response.logs[0].address);
    dispatch(setAddress(response.logs[0].address));
    setIsLoading(false);
    setActiveTab("Set Token");
  } catch (error) {
    console.log(error);
  }
};

export default handleCreateCompany;
