"use client";
import useGetAllLogs from "@/logic/hooks/useGetAllLogs";
import { Loader } from "../Loader/Loader";
import { useState } from "react";
import { Button } from "../Button/Button";

export const StreamHistory = ({ streams, outsource }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Button onClick={() => setToggle((prev) => !prev)}>
        {toggle
          ? "Streams is showing: push to switch to Outsource"
          : "Outsource is showing: push to switch to Streams"}
      </Button>
      {toggle ? (
        streams.length != 0 ? (
          streams.map(({ addr, name, earned, startAt, time, txHash }) => (
            <div key={txHash}>{addr}</div>
          ))
        ) : (
          <div>You dont have history of tx</div>
        )
      ) : outsource.length != 0 ? (
        outsource.map(({ who, taskName, startDate }) => (
          <div key={startDate}>
            <div> {who}</div>
            <div> {taskName}</div>
          </div>
        ))
      ) : (
        <div>You dont have history of tx</div>
      )}
    </>
  );
};
