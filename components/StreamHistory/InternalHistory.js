'use client';
import styles from './StreamHistory.module.scss';
import dayjs from 'dayjs';

export const InternalHistory = ({ streams, symbolToken }) => {
  return (
    <ul className={styles.list}>
      <li>
        <ul className={styles.top}>
          <li>Address</li>
          <li>Status</li>
          <li>TxHash</li>
          <li>Earned</li>
          <li>StartAt</li>
          <li>EndAt</li>
        </ul>
      </li>
      <li>
        {streams.length != 0 ? (
          streams.map(({ addr, name, earned, startAt, time, txHash }) => (
            <ul className={styles.internalrow} key={txHash}>
              <li>
                {addr.substr(0, 5)}...{addr.substr(-4)}
              </li>
              <li>{name}</li>
              <li>
                {txHash.substr(0, 5)}...{txHash.substr(-4)}
              </li>
              <li>
                {parseFloat(earned).toFixed(2)} {symbolToken}
              </li>
              <li>{dayjs.unix(startAt).format('HH:mm DD/MM/YYYY')}</li>
              <li>{dayjs.unix(time).format('HH:mm DD/MM/YYYY')}</li>
            </ul>
          ))
        ) : (
          <p className={styles.notx}>You dont have history of tx</p>
        )}
      </li>
    </ul>
  );
};
