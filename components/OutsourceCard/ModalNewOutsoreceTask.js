import { Loader, Notif } from "@/components";
import useOutsourceActions from "@/logic/hooks/useOutsourceActions";
import { useRef } from "react";

export const ModalNewOutsoreceTask = ({ setActive, id }) => {
  const addressUserRef = useRef();
  const taskNameRef = useRef();
  const wageRef = useRef();
  const timeRef = useRef();

  const { isLoading, notif, setNotif, hadleAddNewTask } = useOutsourceActions(
    id,
    setActive,
    addressUserRef,
    taskNameRef,
    wageRef,
    timeRef
  );

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (
      addressUserRef.current.value !== "" &&
      taskNameRef.current.value !== "" &&
      wageRef.current.value !== "" &&
      timeRef.current.value !== ""
    ) {
      hadleAddNewTask();
      addressUserRef.current.value = "";
      taskNameRef.current.value = "";
      wageRef.current.value = "";
      timeRef.current.value = "";
    } else {
      setNotif("Enter something!");
      setTimeout(() => setNotif(""), 5000);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={onFormSubmit}>
          <input
            ref={addressUserRef}
            type="string"
            name="Set address of outsourcer"
            id="Set address of outsourcer"
            placeholder="Enter address of outsourcer"
          />
          <input
            ref={taskNameRef}
            type="string"
            name="Set name of task"
            id="Set name of task"
            placeholder="Enter name of new task"
          />
          <input
            ref={wageRef}
            type="number"
            name="Set wage"
            id="Set wage"
            placeholder="Enter wage for task"
            min="0"
          />
          <input
            ref={timeRef}
            type="number"
            name="Set time"
            id="Set time"
            placeholder="Enter deadline for task"
            min="0"
          />
          <input type="submit" value="Add task" />
          <Notif active={notif}>{notif}</Notif>
        </form>
      )}
    </>
  );
};
