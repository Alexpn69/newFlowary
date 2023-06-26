"use client";
import styles from "./StreamHistory.module.scss";
import { useState } from "react";
import {
  Button,
  ChangeLogo,
  InternalHistory,
  OutsourceHistory,
} from "@/components";
import { useSelector } from "react-redux";
import { contractSelector } from "@/store/reducers/contract/reducer";

export const StreamHistory = ({ streams, outsource }) => {
  const [toggle, setToggle] = useState(true);
  const { symbolToken } = useSelector(contractSelector);
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <Button
          onClick={() => setToggle((prev) => !prev)}
          className={styles.btn}
        >
          <ChangeLogo className={styles.svg} />
          Swap
        </Button>
        {toggle ? "Internal Stats" : "Outsource Stats"}
      </h3>
      {toggle ? (
        <InternalHistory streams={streams} symbolToken={symbolToken} />
      ) : (
        <OutsourceHistory outsource={outsource} symbolToken={symbolToken} />
      )}
    </div>
  );
};
