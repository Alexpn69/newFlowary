"use client";
import styles from "./page.module.scss";
import { useAccount } from "wagmi";
import { AccessDenied, OutsourceCard, OutsourceWorkerCard } from "@/components";
import { useSelector } from "react-redux";
import { contractSelector } from "@/store/reducers/contract/reducer";

export default function Outsourcedworkers() {
  const { address: walletAddress } = useAccount();
  const { role, address } = useSelector(contractSelector);

  if (
    !walletAddress &&
    address !== "0x3598f3a5A8070340Fde9E9cEcaF6F1F0129b323a"
  ) {
    return <AccessDenied type="wallet" />;
  } else if (
    role === "Owner" ||
    role === "Admin" ||
    address === "0x3598f3a5A8070340Fde9E9cEcaF6F1F0129b323a"
  ) {
    return (
      <div>
        <OutsourceCard />
      </div>
    );
  } else if (role === "Worker") {
    return (
      <div>
        <OutsourceWorkerCard />
      </div>
    );
  } else {
    return <AccessDenied />;
  }
}
