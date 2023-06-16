"use client";
import styles from "./UserCard.module.scss";
import { useState } from "react";
import useStartStopStream from "@/logic/hooks/useStartStopStream";
import { Button, Loader, Modal, ModalSettingsUser, Notif } from "@/components";

export const UserCard = ({ who, rate }) => {
  const [active, setActive] = useState(false);
  const {
    isLoading,
    notif,
    isLoadingBalance,
    isActive,
    amountOfStream,
    hadleStartStream,
    hadleStopStream,
  } = useStartStopStream(who);
  return (
    <ul>
      <h3>User address: {who}</h3>
      <h5>User rate: {rate}</h5>
      {!isActive ? (
        <Button onClick={hadleStartStream}>
          {isLoading ? <Loader /> : "Start stream"}
        </Button>
      ) : (
        <Button onClick={hadleStopStream}>
          {isLoading ? <Loader /> : "Stop stream"}
        </Button>
      )}
      {isActive && (
        <div style={{ display: "flex" }}>
          Amount of stream:{" "}
          {isLoadingBalance ? <Loader /> : amountOfStream.toFixed(5)}
        </div>
      )}
      <Button onClick={() => setActive(true)}>Settings</Button>
      <Modal active={active} setActive={setActive}>
        <ModalSettingsUser setActive={setActive} who={who} />
      </Modal>
      <Notif active={notif}>{notif}</Notif>
    </ul>
  );
};
