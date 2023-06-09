'use client';
import styles from './page.module.scss';
import { useAccount } from 'wagmi';
import { AccessDenied } from '@/components';
import { useSelector } from 'react-redux';
import { contractSelector } from '@/store/reducers/contract/reducer';

export default function Outsourcedworkers() {
  const { address: walletAddress } = useAccount();
  const { role } = useSelector(contractSelector);

  if (!walletAddress && role !== 'Spectator') {
    return <AccessDenied type="wallet" />;
  } else if (role === 'Owner' || role === 'Admin' || role === 'Spectator') {
    return <div>Аутсорс оунер</div>;
  } else if (role === 'Worker' || role === 'Outsourcer') {
    return <div>показывать сотруднику только сотрудника компонент</div>;
  } else {
    return <AccessDenied />;
  }
}
