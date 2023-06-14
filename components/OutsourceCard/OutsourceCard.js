"use client";
import { contractSelector } from "@/store/reducers/contract/reducer";
import { useSelector } from "react-redux";
import { OutsourceTask } from "./OutsourceTask";
import { Modal } from "../Modal/Modal";
import { ModalNewOutsoreceTask } from "./ModalNewOutsoreceTask";
import { Button } from "../Button/Button";
import { useMemo, useState } from "react";
import dayjs from "dayjs";

export const OutsourceCard = () => {
  const { arrOutsource } = useSelector(contractSelector);
  const [active, setActive] = useState(false);
  const arrOutsorceAlive = arrOutsource.filter((i) => i.status != 3);

  //this is for history
  //const arrOutsorceFinished = arrOutsource.filter((i) => i.status === 3);
  return (
    <>
      {arrOutsorceAlive.map(
        ({ taskName, wage, who, startDate, deadline, id, status }) => (
          <OutsourceTask
            key={who}
            who={who}
            wage={wage}
            taskName={taskName}
            startDate={startDate}
            deadline={deadline}
            id={id}
            status={status}
          />
        )
      )}
      <Button onClick={() => setActive(true)}>Add new task</Button>

      <Modal active={active} setActive={setActive}>
        <ModalNewOutsoreceTask setActive={setActive} />
      </Modal>
    </>
  );
};
