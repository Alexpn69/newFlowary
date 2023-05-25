"use client";
import { contractSelector } from "@/store/reducers/contract/reducer";
import styles from "./page.module.scss";
import { useSelector } from "react-redux";
import { sumValuesByKey } from "@/logic/functions/utils";
import useGetAllLogs from "@/logic/hooks/useGetAllLogs";

export default function Overview() {
  const { address, arrOutsource, arrEmployee, symbolToken } =
    useSelector(contractSelector);
  const sumOfOutsource =
    arrOutsource.reduce((acc, obj) => acc + Number(obj.wage), 0) || 0;
  const { arrayBlock } = useGetAllLogs();
  const totalValueStreams = sumValuesByKey(arrayBlock, "earned");

  return (
    <div>
      <div>Zdes predlagau sdelat Dashboard i vyvesty osnovnie pokazateli</div>
      <br />
      <div>address contracta companii {address}</div> <br />
      <div>kolichestvo sotrudnikov {arrEmployee.length}</div> <br />
      <div>summa vseh zavershennyh strimov {arrEmployee.length}</div> <br />
      <div>
        summa vseh outsource {totalValueStreams} {symbolToken}
      </div>
      <div>kolichestvo outsoursr {arrOutsource.length}</div> <br />
      <div>
        summa vseh outsource {sumOfOutsource}
        {symbolToken}
      </div>{" "}
      <br />
    </div>
  );
}
