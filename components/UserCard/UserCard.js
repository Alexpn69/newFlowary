"use client";
import styles from "./UserCard.module.scss";
import { useState } from "react";
import ModalSettingsUser from "./ModalSettingsUser/ModalSettingsUser";
import useStartStopStream from "@/logic/hooks/useStartStopStream";

const UserCard = ({ who, rate }) => {
  const [active, setActive] = useState(false);
  const {
    isLoading,
    isActive,
    amountOfStream,
    hadleStartStream,
    hadleStopStream,
  } = useStartStopStream(who);

  return (
    <>
      <h3>User address: {who}</h3>
      <h5>User rate: {rate}</h5>
      {!isActive ? (
        <button onClick={hadleStartStream}>Start stream</button>
      ) : (
        <button onClick={hadleStopStream}>Stop stream</button>
      )}
      <button onClick={() => setActive(true)}>Modal settings</button>
      <ModalSettingsUser active={active} setActive={setActive} who={who} />

      <br />
      <br />
      {isLoading && isActive ? (
        <h3>Loading...</h3>
      ) : (
        isActive && <h1>Amount of stream: {amountOfStream.toFixed(5)}</h1>
      )}
    </>
  );
};

export default UserCard;
