"use client";
import useGetAllLogs from "@/logic/hooks/useGetAllLogs";
import styles from "./page.module.scss";
import dayjs, { Dayjs } from "dayjs";
import { Loader, AccessDenied } from "@/components";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";
import { contractSelector } from "@/store/reducers/contract/reducer";

export default function History() {
  const { role } = useSelector(contractSelector);
  const { isLoading, arrayBlock } = useGetAllLogs();
  const { address: walletAddress } = useAccount();
  console.log("Statistika", arrayBlock);

  if (!walletAddress && role !== "Spectator") {
    return <AccessDenied type="wallet" />;
  } else if (isLoading) {
    return <Loader />;
  } else if (role === "Owner" || role === "Admin" || role === "Spectator") {
    return (
      <>
        {arrayBlock && (
          <div>
            <div>
              Smotri v consoli arrayBlock - eto statistika po vsem strimam,
              nizhe vivel info po 1 strimu dly obrazca
            </div>
            <div>Staus: {arrayBlock[0]?.name}</div>
            <div>Summa strima: {arrayBlock[0]?.earned}</div>
            <div>
              {" "}
              Vremya nachala strima{" "}
              {dayjs.unix(arrayBlock[0]?.startAt).format("HH:mm DD/MM/YYYY")}
            </div>
            <div>
              Vremya finisha strima{" "}
              {dayjs.unix(arrayBlock[0]?.time).format("HH:mm DD/MM/YYYY")}
            </div>
            txHash: {arrayBlock[0]?.txHash}
          </div>
        )}
      </>
    );
  } else if (role === "Worker") {
    return <>показывать сотруднику только историю сотрудника</>;
  } else {
    return <AccessDenied />;
  }
}
