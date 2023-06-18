"use client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const WageDynamic = ({ wage, startDate, deadline }) => {
  const wagePerSecond = wage / (deadline - startDate);
  const [wageDynamic, setWageDynamic] = useState(
    (dayjs().unix() - startDate) * wagePerSecond
  );
  const activeStream = deadline > dayjs().unix();

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (activeStream && wage > 0) {
        setWageDynamic(wageDynamic + wagePerSecond / 10);
      }
    }, 100);

    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <>
      <div>{wageDynamic.toFixed(4)}</div>
    </>
  );
};

export default WageDynamic;
