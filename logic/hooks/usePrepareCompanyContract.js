import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { contractSelector } from "../../store/reducers/contract/reducer";
import { CONTRACT_INSTANCE_ABI } from "../../web3/contractInstanceAbi";
import getSignedContract from "../functions/getSignedContract";

const usePrepareCompanyContract = () => {
  const { address } = useSelector(contractSelector);
  const [contractCompany, setContractCompany] = useState(null);
  const [signedCompanyContract, setSignedCompanyContract] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { contract, contractSigner } = await getSignedContract(
          CONTRACT_INSTANCE_ABI,
          address
        );
        setContractCompany(contract);
        setSignedCompanyContract(contractSigner);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return { contractCompany, signedCompanyContract };
};

export default usePrepareCompanyContract;
