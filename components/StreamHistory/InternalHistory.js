'use client';
import styles from './StreamHistory.module.scss';
import dayjs from 'dayjs';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import clsx from 'clsx';
import Link from 'next/link';
import { Scan } from '@/components';

export const InternalHistory = ({ streams, symbolToken }) => {
  console.log(streams);
  return (
    <ul className={styles.list}>
      <li>
        <ul className={styles.top}>
          <li>Address</li>
          <li>Status</li>
          <li>
            <Scan />
            TxHash
          </li>
          <li>Earned</li>
          <li>StartAt</li>
          <li>EndAt</li>
        </ul>
      </li>
      <li>
        {streams.length != 0 ? (
          streams.map(({ addr, name, earned, startAt, time, txHash }) => (
            <ul className={styles.internalrow} key={txHash}>
              <li className={styles.address}>
                <span className={styles.left}>
                  <Jazzicon diameter={24} seed={jsNumberForAddress(addr)} />
                </span>
                <span className={styles.right}>
                  {addr.substr(0, 5)}...{addr.substr(-4)}
                </span>
              </li>
              <li className={clsx(name === 'Active' ? styles.active : styles.finished)}>{name}</li>
              <li>
                <Link href={txHash ? `https://goerli.etherscan.io/tx/${txHash}` : `./history`}>
                  {txHash?.substr(0, 5)}...{txHash?.substr(-4)}
                </Link>
              </li>
              <li className={styles.earned}>
                {earned ? parseFloat(earned).toFixed(2) + ' ' + symbolToken : '...'}
              </li>
              <li>
                {startAt
                  ? dayjs.unix(startAt).format('HH:mm DD/MM/YYYY')
                  : dayjs.unix(time).format('HH:mm DD/MM/YYYY')}
              </li>
              <li>{startAt ? dayjs.unix(time).format('HH:mm DD/MM/YYYY') : '...'}</li>
            </ul>
          ))
        ) : (
          <p className={styles.notx}>You dont have history of tx</p>
        )}
      </li>
    </ul>
  );
};
