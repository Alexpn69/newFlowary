'use client';
import styles from './page.module.scss';
import { useSelector } from 'react-redux';
import { contractSelector } from '@/store/reducers/contract/reducer';
import { AccessDenied, EmploeeCard, EmploeeWorkerCard } from '@/components';
import { useAccount } from 'wagmi';

export default function Internalstaff() {
  const { address: walletAddress } = useAccount();
  const { role, address } = useSelector(contractSelector);

  if (!walletAddress && address !== '0x3598f3a5A8070340Fde9E9cEcaF6F1F0129b323a') {
    return <AccessDenied type="wallet" />;
  } else if (
    role === 'Owner' ||
    role === 'Admin' ||
    address === '0x3598f3a5A8070340Fde9E9cEcaF6F1F0129b323a'
  ) {
    return <EmploeeCard />;
  } else if (role === 'Worker') {
    return <EmploeeWorkerCard />;
  } else {
    return <AccessDenied />;
  }
}
