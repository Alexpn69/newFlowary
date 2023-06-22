'use client';
import { useAccount } from 'wagmi';
import { AccessDenied, OutsourceCard } from '@/components';
import { useSelector } from 'react-redux';
import { contractSelector } from '@/store/reducers/contract/reducer';

export default function Outsourcedworkers() {
  const { address: walletAddress } = useAccount();
  const { role, address, arrOutsource } = useSelector(contractSelector);
  const arrOutsorceAlive = arrOutsource.filter((i) => i.status != 3);
  const arrOutsorceAliveWorker = arrOutsource.filter(
    (i) => i.status != 3 && i.who === walletAddress
  );

  if (!walletAddress && address !== '0x3598f3a5A8070340Fde9E9cEcaF6F1F0129b323a') {
    return <AccessDenied type="wallet" />;
  } else if (
    role === 'Owner' ||
    role === 'Admin' ||
    address === '0x3598f3a5A8070340Fde9E9cEcaF6F1F0129b323a'
  ) {
    return <OutsourceCard array={arrOutsorceAlive} />;
  } else if (role === 'Worker') {
    return <OutsourceCard array={arrOutsorceAliveWorker} />;
  } else {
    return <AccessDenied />;
  }
}
