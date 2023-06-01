import defaultProvider from "@/web3/defaultProvider";
import walletProvider from "@/web3/walletProvider";
import { ethers } from "ethers";

const getSignedContract = async (abi, address) => {
  const contract = new ethers.Contract(address, abi, defaultProvider);

  const signer = await walletProvider.getSigner();
  const contractSigner = contract.connect(signer);

  return { contract, contractSigner };
};

export default getSignedContract;
