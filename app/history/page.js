'use client';
import useGetAllLogs from '@/logic/hooks/useGetAllLogs';
import styles from './page.module.scss';
import { Loader, AccessDenied, StreamHistory } from '@/components';
import { useAccount } from 'wagmi';
import { useSelector } from 'react-redux';
import { contractSelector } from '@/store/reducers/contract/reducer';

export default function History() {
  const { role, address, arrOutsource } = useSelector(contractSelector);
  const { isLoading, arrayBlock } = useGetAllLogs();
  const { address: walletAddress } = useAccount();
  const streamsEmployee = arrayBlock.filter((employee) => employee.addr === walletAddress);
  const outsourceEmployee = arrOutsource.filter((i) => i.who === walletAddress);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  if (!walletAddress && address !== '0x3598f3a5A8070340Fde9E9cEcaF6F1F0129b323a') {
    return <AccessDenied type="wallet" />;
  } else if (
    role === 'Owner' ||
    role === 'Admin' ||
    address === '0x3598f3a5A8070340Fde9E9cEcaF6F1F0129b323a'
  ) {
    return <>{arrayBlock && <StreamHistory streams={arrayBlock} outsource={arrOutsource} />}</>;
  } else if (role === 'Worker') {
    return (
      <>
        {streamsEmployee && (
          <StreamHistory streams={streamsEmployee} outsource={outsourceEmployee} />
        )}
      </>
    );
  } else {
    return <AccessDenied />;
  }
}
