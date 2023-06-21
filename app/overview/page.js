"use client";
import styles from "./page.module.scss";
import { contractSelector } from "@/store/reducers/contract/reducer";
import { useSelector } from "react-redux";
import { substrAddress, sumValuesByKey } from "@/logic/functions/utils";
import useGetAllLogs from "@/logic/hooks/useGetAllLogs";
import {
  AdminLogo,
  Button,
  ChangeLogo,
  ContractLogo,
  OwnerLogo,
  Slider,
  BestPerformers,
  Loader,
} from "@/components";
import { useState } from "react";

export default function Page() {
  const [staff, setStaff] = useState(false);
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
        <div className={styles.company}>
          <h2>{name}</h2>
          <div className={styles.row}>
            <div className={styles.svg}>
              <ContractLogo />
            </div>
            <div className={styles.text}>
              <h3>Company Contract</h3>
              <p>{substrAddress(address)}</p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.svg}>
              <OwnerLogo />
            </div>
            <div className={styles.text}>
              <h3>Owner</h3>
              <p>{substrAddress(owner)}</p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.svg}>
              <AdminLogo />
            </div>
            <div className={styles.text}>
              <h3>Admin</h3>
              <p>{substrAddress(admin)}</p>
            </div>
          </div>
        </div>
        <div className={styles.balance}>
          <h2>Total balance</h2>
          <h3>
            {parseFloat(balance).toFixed(2)} {symbolToken}
          </h3>
        </div>
        <div className={styles.staff}>
          <div className={styles.head}>
            {staff ? "Outsorce Stats" : "Internal Stats"}
            <Button
              className={styles.btn}
              onClick={() => setStaff((prev) => !prev)}
            >
              <ChangeLogo className={styles.svg} />
            </Button>
          </div>
          <div className={styles.row}>
            <h3>Stream Value</h3>
            <h4>
              <span>
                {staff
                  ? `${
                      parseFloat(totalValueOutsource).toFixed(2) || 0
                    } ${symbolToken}`
                  : `${
                      parseFloat(totalValueStreams).toFixed(2) || 0
                    } ${symbolToken}`}
              </span>
            </h4>
          </div>
          <div className={styles.row}>
            <h3>Stream Count</h3>
            <h4>
              <span>{staff ? arrOutsource.length : arrayBlock.length}</span>
            </h4>
          </div>
          <div className={styles.row}>
            <h3>All Performers</h3>
            <h4>
              <span>{staff ? arrOutsource.length : arrEmployee.length}</span>
            </h4>
          </div>
        </div>
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
