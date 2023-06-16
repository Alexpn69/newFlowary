import { contractSelector, setRole } from "@/store/reducers/contract/reducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";

const useRole = () => {
  const { address, owner, admin, arrOutsource, arrEmployee } =
    useSelector(contractSelector);
  const {
    address: walletAddress,
    isDisconnected,
    isConnecting,
    isConnected,
    isReconnecting,
  } = useAccount();
  const dispatch = useDispatch();

  useEffect(() => {
    if (walletAddress === owner) {
      dispatch(setRole("Owner"));
    } else if (walletAddress === admin) {
      dispatch(setRole("Admin"));
    } else if (
      arrEmployee.find((employee) => employee.who === walletAddress) ||
      arrOutsource.find((outsource) => outsource.who === walletAddress)
    ) {
      dispatch(setRole("Worker"));
    }
    // else if (arrEmployee.find((employee) => employee.who === walletAddress)) {
    //   dispatch(setRole("Employee"));
    // } else if (
    //   arrOutsource.find((outsource) => outsource.who === walletAddress)
    // ) {
    //   dispatch(setRole("Outsourcer"));
    // }
    // else if (address === "0x3598f3a5A8070340Fde9E9cEcaF6F1F0129b323a") {
    //   dispatch(setRole("Spectator"));
    // }
    else {
      dispatch(setRole("Guest"));
    }
  }, [
    walletAddress,
    owner,
    admin,
    arrOutsource,
    arrEmployee,
    address,
    dispatch,
    isDisconnected,
    isConnecting,
    isConnected,
    isReconnecting,
  ]);
};
export default useRole;
