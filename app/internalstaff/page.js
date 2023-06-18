"use client";
import { useSelector } from "react-redux";
import styles from "./page.module.scss";
import { contractSelector } from "@/store/reducers/contract/reducer";
import { useState } from "react";
import {
  Button,
  AccessDenied,
  UserCard,
  Modal,
  ModalAddNewUser,
  EmploeeCard,
} from "@/components";
import { useAccount } from "wagmi";

export default function Internalstaff() {
  const [active, setActive] = useState(false);
  const { address: walletAddress } = useAccount();
  const { role, arrEmployee, address } = useSelector(contractSelector);

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
      <>
        <Button className={styles.btn} onClick={() => setActive(true)}>
          Add New Employee
        </Button>
        <ul>
          {arrEmployee.map(({ who, rate }) => (
            <UserCard key={who} who={who} rate={rate} />
          ))}
        </ul>
        <Modal active={active} setActive={setActive}>
          <ModalAddNewUser setActive={setActive} />
        </Modal>
      </>
    );
  } else if (role === "Worker") {
    return (
      <>
        <EmploeeCard key={walletAddress} />
      </>
    );
  } else {
    return <AccessDenied />;
  }
}
