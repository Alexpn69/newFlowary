"use client";
import useGetAllLogs from "@/logic/hooks/useGetAllLogs";
import styles from "./page.module.scss";
import dayjs, { Dayjs } from "dayjs";

export default function History() {
  const { loader, arrayBlock } = useGetAllLogs();
  console.log("Statistika", arrayBlock);
  return (
    <>
      {loader ? (
        <div>LOADING...</div>
      ) : (
        arrayBlock && (
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
        )
      )}
    </>
  );
}
