import styles from './EmploeeCard.module.scss';
import { Button, Modal, ModalAddNewUser, New, EmploeeUserCard } from '@/components';
import { contractSelector } from '@/store/reducers/contract/reducer';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const EmploeeCard = () => {
  const { arrEmployee, symbolToken } = useSelector(contractSelector);
  const [active, setActive] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Button type="main" className={styles.btn} onClick={() => setActive(true)}>
        <New className={styles.svg} />
        Add New Employee
      </Button>
      <ul className={styles.list}>
        <ul className={styles.top}>
          <li>Address/Rate</li>
          <li>Change State</li>
          <li>Amount of stream</li>
        </ul>
        {}
        {arrEmployee.length > 0 ? (
          arrEmployee.map(({ who, rate }) => (
            <EmploeeUserCard key={who} who={who} rate={rate} symbolToken={symbolToken} />
          ))
        ) : (
          <p className={styles.notask}>Employees not found!</p>
        )}
      </ul>
      <Modal active={active} setActive={setActive}>
        <ModalAddNewUser setActive={setActive} />
      </Modal>
    </div>
  );
};
