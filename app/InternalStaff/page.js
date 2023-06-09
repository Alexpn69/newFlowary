'use client';
import { useSelector } from 'react-redux';
import styles from './page.module.scss';
import { contractSelector } from '@/store/reducers/contract/reducer';
import { useState } from 'react';
import {
  Button,
  AccessDenied,
  UserCard,
  Modal,
  ModalAddNewUser,
} from '@/components';
import { useAccount } from 'wagmi';

export default function Internalstaff() {
  const [active, setActive] = useState(false);
  const { address: walletAddress } = useAccount();
  const { role, arrEmployee } = useSelector(contractSelector);

  if (!walletAddress && role !== 'Spectator') {
    return <AccessDenied type="wallet" />;
  } else if (role === 'Owner' || role === 'Admin' || role === 'Spectator') {
    return (
      <>
        <Button className={styles.btn} onClick={() => setActive(true)}>
          Add New Employee
        </Button>
        <ul>
          {arrEmployee.map(({ who, rate }) => (
            <UserCard key={who} who={who} rate={rate} />
          ))}
        </ul>
        <Modal active={active} setActive={setActive}>
          <ModalAddNewUser />
        </Modal>
      </>
    );
  } else if (role === 'Worker' || role === 'Employee') {
    return <>показывать сотруднику только сотрудника компонент</>;
  } else {
    return <AccessDenied />;
  }
}
