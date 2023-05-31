"use client";
import { useSelector } from "react-redux";
import styles from "./page.module.scss";
import { contractSelector } from "@/store/reducers/contract/reducer";
import UserCard from "@/components/UserCard/UserCard";
import { useState } from "react";
import ModalAddNewUser from "@/components/UserCard/ModalAddNewUser/ModalAddNewUser";

export default function Internalstaff() {
  const { arrEmployee } = useSelector(contractSelector);
  const [active, setActive] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setActive(true)}>Modal settings</button>
        <ModalAddNewUser active={active} setActive={setActive} />
      </div>

      <div>
        <ul>
          {arrEmployee.map(({ who, rate }) => (
            <UserCard key={who} who={who} rate={rate} />
          ))}
        </ul>
      </div>
    </>
  );
}
