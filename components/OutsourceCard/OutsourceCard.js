'use client';
import styles from './OutsourceCard.module.scss';
import { contractSelector } from '@/store/reducers/contract/reducer';
import { Modal, Button, ModalNewOutsoreceTask, OutsourceTaskCard, NewTask } from '@/components';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const OutsourceCard = () => {
  const { arrOutsource, symbolToken } = useSelector(contractSelector);
  const [active, setActive] = useState(false);
  const arrOutsorceAlive = arrOutsource.filter((i) => i.status != 3);

  //this is for history
  //const arrOutsorceFinished = arrOutsource.filter((i) => i.status === 3);
  return (
    <div className={styles.wrapper}>
      <Button type="main" className={styles.btn} onClick={() => setActive(true)}>
        <NewTask className={styles.svg} />
        Add New Task
      </Button>
      <ul className={styles.list}>
        <ul className={styles.top}>
          <li>Address</li>
          <li>TaskName</li>
          <li>Amount of stream</li>
          <li>Status</li>
        </ul>
        {arrOutsorceAlive.length > 0 ? (
          arrOutsorceAlive.map(({ taskName, wage, who, startDate, deadline, id, status }) => (
            <OutsourceTaskCard
              key={startDate}
              who={who}
              wage={wage}
              taskName={taskName}
              startDate={startDate}
              deadline={deadline}
              id={id}
              status={status}
              symbolToken={symbolToken}
            />
          ))
        ) : (
          <p className={styles.notask}>Tasks not found!</p>
        )}
      </ul>
      <Modal active={active} setActive={setActive}>
        <ModalNewOutsoreceTask setActive={setActive} />
      </Modal>
    </div>
  );
};
