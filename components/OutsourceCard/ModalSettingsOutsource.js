"use client";
import { Button, Loader, Notif } from "@/components";
import useOutsourceActions from "@/logic/hooks/useOutsourceActions";
import dayjs from "dayjs";

export const ModalSettingsOutsource = ({
  id,
  status,
  setActive,
  who,
  wage,
  startDate,
  deadline,
  activeStream,
}) => {
  const { isLoading, notif, handleClaim, handleFinishJob } =
    useOutsourceActions(id, setActive);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <p>Address of outsourcer: {who}</p>
        <p>Earn: {wage} </p>
        <p>Start date: {dayjs.unix(startDate).format("HH:mm DD/MM/YYYY")}</p>
        <p>Finish date: {dayjs.unix(deadline).format("HH:mm DD/MM/YYYY")}</p>
      </div>
      <div>
        <Button onClick={status === 2 ? handleFinishJob : handleClaim}>
          {status === 2 ? "Finish job" : "Claim reward"}
        </Button>
      </div>

      <Notif active={notif}>{notif}</Notif>
    </>
  );
};
