import dayjs from "dayjs";
import { Modal } from "../Modal/Modal";
import { ModalSettingsOutsource } from "./ModalSettingsOutsource";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";

export const OutsourceTask = ({
  who,
  wage,
  taskName,
  startDate,
  deadline,
  id,
  status,
}) => {
  const [active, setActive] = useState(false);
  const activeStream = deadline > dayjs().unix();
  const wagePerSecond = wage / (deadline - startDate);
  const [wageDynamic, setWageDynamic] = useState(
    (dayjs().unix() - startDate) * wagePerSecond
  );

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
  console.log("RERENDER");

  return (
    <>
      <p>TaskName: {taskName}</p>
      <div>{activeStream && wageDynamic.toFixed(4)}</div>
      <div>
        Status:
        {activeStream ? (
          <p>Active</p>
        ) : status === 1 ? (
          <p>Waiting for claim</p>
        ) : (
          <p>Waiting for accept</p>
        )}
      </div>
      <Button onClick={() => setActive(true)}>Settings</Button>
      <Modal active={active} setActive={setActive} status={status} id={id}>
        <ModalSettingsOutsource
          status={status}
          id={id}
          setActive={setActive}
          who={who}
          wage={wage}
          startDate={startDate}
          deadline={deadline}
          activeStream={activeStream}
        />
      </Modal>
      <br />
    </>
  );
};
