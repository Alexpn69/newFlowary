import styles from './OutsourceCard.module.scss';
import { Loader, Notif } from '@/components';
import useOutsourceActions from '@/logic/hooks/useOutsourceActions';
import { useRef } from 'react';

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
      addressUserRef.current.value !== '' &&
      taskNameRef.current.value !== '' &&
      wageRef.current.value !== '' &&
      timeRef.current.value !== ''
    ) {
      hadleAddNewTask();
      addressUserRef.current.value = '';
      taskNameRef.current.value = '';
      wageRef.current.value = '';
      timeRef.current.value = '';
    } else {
      setNotif('Enter something!');
      setTimeout(() => setNotif(''), 5000);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <form onSubmit={onFormSubmit} className={styles.form}>
        <div className={styles.wrap}>
          <label htmlFor="Address">Address:</label>
          <input
            ref={addressUserRef}
            type="string"
            name="Address"
            id="Address"
            placeholder="Enter address of outsourcer"
          />
        </div>
        <div className={styles.wrap}>
          <label htmlFor="Name">Name:</label>
          <input
            ref={taskNameRef}
            type="string"
            name="Name"
            id="Name"
            placeholder="Enter name of new task"
          />
        </div>
        <div className={styles.wrap}>
          <label htmlFor="Wage">Wage:</label>
          <input
            ref={wageRef}
            type="number"
            name="Wage"
            id="Wage"
            placeholder="Enter wage for task"
            min="0"
          />
        </div>
        <div className={styles.wrap}>
          <label htmlFor="Hours">Hours:</label>
          <input
            ref={timeRef}
            type="number"
            name="Hours"
            id="Hours"
            placeholder="Enter deadline for task"
            min="0"
          />
        </div>
        <input type="submit" value="Add" />
        <Notif active={notif}>{notif}</Notif>
      </form>
    </>
  );
};
