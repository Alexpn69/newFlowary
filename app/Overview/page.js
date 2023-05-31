"use client";
import { contractSelector } from "@/store/reducers/contract/reducer";
import styles from "./page.module.scss";
import { useSelector } from "react-redux";
import { sumValuesByKey } from "@/logic/functions/utils";
import useGetAllLogs from "@/logic/hooks/useGetAllLogs";

export default function Overview() {
  const { address, arrOutsource, arrEmployee, symbolToken } =
    useSelector(contractSelector);
  const { arrayBlock } = useGetAllLogs();

  const totalValueStreams = sumValuesByKey(arrayBlock, "earned");
  const totalValueOutsource = sumValuesByKey(arrOutsource, "wage");

  return (
    <div>
      <div>Zdes predlagau sdelat Dashboard i vyvesty osnovnie pokazateli</div>
      <br />
      <div>address contracta companii {address}</div> <br />
      <div>kolichestvo sotrudnikov {arrEmployee.length}</div> <br />
      <div>
        summa vseh zavershennyh strimov {Math.floor(totalValueStreams)}
        {symbolToken}
      </div>{" "}
      <br />
      <div>kolichestvo outsoursr {arrOutsource.length}</div> <br />
      <div>
        summa vseh outsource {totalValueOutsource}
        {symbolToken}
      </div>{" "}
      <br />
    </div>
  );
}
