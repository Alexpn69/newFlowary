import { setAdmin, setHl, setOwner } from "@/store/reducers/contract/reducer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import usePrepareCompanyContract from "./usePrepareCompanyContract";
import usePrepareTokenContract from "./usePrepareTokenContract";
import { ethers } from "ethers";
import { TOKEN_ABI } from "@/web3/tokenAbi";
import defaultProvider from "@/web3/defaultProvider";

const useSettingsActions = () => {
  const dispatch = useDispatch();
  const [isLoadingOwner, setIsLoadingOwner] = useState(false);
  const [isLoadingAdmin, setIsLoadingAdmin] = useState(false);
  const [isLoadingBuffer, setIsLoadingBuffer] = useState(false);
  const [isLoadingClaim, setIsLoadingClaim] = useState(false);

  const [notif, setNotif] = useState("");
  const { signedCompanyContract } = usePrepareCompanyContract();
  const { signedTokenContract } = usePrepareTokenContract();

  const handleSetAdmin = async (newAdmin) => {
    try {
      setIsLoadingAdmin(true);
      setNotif("");
      const tx = await signedCompanyContract.changeAdmin(newAdmin);
      await tx.wait();
      console.log("DONE!!!!");
      dispatch(setAdmin(newAdmin));
      setNotif("Success!");
    } catch (error) {
      console.log(error);
      setNotif("An error occurred!");
    } finally {
      setIsLoadingAdmin(false);
    }
  };

  const handleSetOwner = async (newOwner) => {
    try {
      setIsLoadingOwner(true);
      setNotif("");
      const tx = await signedCompanyContract.sendOwnership(newOwner);
      await tx.wait();
      console.log("DONE OWNER!!!!");
      dispatch(setOwner(newOwner));
      setNotif("Success!");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingOwner(false);
    }
  };
  //-----------------------------  Buffer FUNC -----------------
  const handleBufferLimit = async (hlLimit) => {
    try {
      setIsLoadingBuffer(true);
      setNotif("");
      const tx = await signedCompanyContract.setHLStartStream(hlLimit * 3600);
      await tx.wait();
      console.log("DONE OWNER!!!!");
      dispatch(setHl(hlLimit * 3600));
      setNotif("Success!");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingBuffer(false);
    }
  };

  //------------------Claim tokens---------------
  const handleClaimToken = async (claimAmount) => {
    try {
      setIsLoadingClaim(true);
      setNotif("");
      const tx = await signedTokenContract.mint(BigInt(claimAmount * 10 ** 18));
      await tx.wait();
      console.log("DONE", tx);
      setNotif("Success!");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingClaim(false);
    }
  };

  return {
    notif,
    handleSetAdmin,
    handleSetOwner,
    handleClaimToken,
    handleBufferLimit,
    isLoadingOwner,
    isLoadingAdmin,
    isLoadingBuffer,
    isLoadingClaim,
  };
};

export default useSettingsActions;
