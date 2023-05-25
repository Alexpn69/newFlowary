import defaultProvider from "../../web3/defaultProvider";
import { getContract } from "@wagmi/core";
import { useSelector } from "react-redux";
import { contractSelector } from "../../store/reducers/contract/reducer";
import { CONTRACT_ABI } from "../../web3/contractInstanceAbi";
import connectSigner from "@/web3/signer";

const useContract = () => {
  const { address } = useSelector(contractSelector);
  let contract;
  if (address) {
    contract = getContract({
      address: address,
      abi: CONTRACT_ABI,
      signerOrProvider: defaultProvider,
    });
  }
  let contractSignerInstance;
  if (contract) {
    contractSignerInstance = connectSigner(contract);
  }
  return { contract, contractSignerInstance };
};
export default useContract;
