"use client";
import styles from "./page.module.scss";
import { contractSelector } from "@/store/reducers/contract/reducer";
import { useSelector } from "react-redux";
import { sumValuesByKey } from "@/logic/functions/utils";
import useGetAllLogs from "@/logic/hooks/useGetAllLogs";
import {
  Slider,
  BestPerformers,
  Loader,
  CompanyInfo,
  StaffStats,
} from "@/components";

export default function Page() {
  const {
    name,
    role,
    address,
    owner,
    admin,
    balance,
    arrOutsource,
    arrEmployee,
    symbolToken,
    liquidation,
  } = useSelector(contractSelector);
  const { arrayBlock, isLoading } = useGetAllLogs();

  const totalValueStreams = sumValuesByKey(
    arrayBlock.filter(({ name }) => name === "Finished"),
    "earned"
  );
  const totalValueOutsource = sumValuesByKey(arrOutsource, "wage");

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className={styles.left}>
        <CompanyInfo
          name={name}
          address={address}
          owner={owner}
          admin={admin}
        />
        <div className={styles.balance}>
          {liquidation ? (
            <h2>Your company has liquidation status</h2>
          ) : (
            <h2>Total balance</h2>
          )}
          <h3>
            {parseFloat(balance).toFixed(2)} {symbolToken}
          </h3>
        </div>
        <StaffStats
          totalValueStreams={totalValueStreams}
          totalValueOutsource={totalValueOutsource}
          arrOutsource={arrOutsource}
          arrEmployee={arrEmployee}
          arrayBlock={arrayBlock}
          symbolToken={symbolToken}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <h2 className={styles.title}>
            Welcome back, dear <span>{role}!</span>
          </h2>
          <Slider />
        </div>
        <BestPerformers />
      </div>
    </>
  );
}
