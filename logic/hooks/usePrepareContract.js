import defaultProvider from "@/web3/defaultProvider";
import walletProvider from "@/web3/walletProvider";
import { ethers } from "ethers";

const getContractSigner = async (abi, address) => {
  const contract = new ethers.Contract(address, abi, defaultProvider);

  const signer = await walletProvider.getSigner();

  const contractSigner = contract.connect(signer);

  return contractSigner;
};

export default getContractSigner;
