"use client";
import { useSelector } from "react-redux";
import styles from "./page.module.scss";
import { contractSelector } from "@/store/reducers/contract/reducer";

export default function Internalstaff() {
  const { address, token, decimalsToken, arrEmployee, owner, admin } =
    useSelector(contractSelector);
  return (
    <>
      <ul>
        {arrEmployee.map((item) => (
          <li key={item.who}> {item.who}</li>
        ))}
      </ul>
    </>
  );
}
