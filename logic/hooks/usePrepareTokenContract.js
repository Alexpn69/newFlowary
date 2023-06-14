import { TOKEN_ABI } from "@/web3/tokenAbi";
import getSignedContract from "../functions/getSignedContract";
import { useEffect, useState } from "react";

const usePrepareTokenContract = () => {
  const [signedTokenContract, setSignedTokenContract] = useState(null);

  const address = "0x7773324bCf2fA53E4f03Ee09cCEba2A6b481B9a7";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { contractSigner } = await getSignedContract(TOKEN_ABI, address);
        setSignedTokenContract(contractSigner);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return { signedTokenContract };
};
export default usePrepareTokenContract;
