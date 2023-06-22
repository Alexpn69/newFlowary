'use client';
import styles from './StreamHistory.module.scss';
import dayjs from 'dayjs';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import clsx from 'clsx';
import { SubstrAddress } from '@/components';

export const OutsourceHistory = ({ outsource, symbolToken }) => {
  const statusOutsource = { 1: 'Waiting for claim', 2: 'Waiting for accept', 3: 'Finished' };
  return (
    <ul className={styles.list}>
      <li>
        <ul className={styles.top}>
          <li>Address</li>
          <li>Status</li>
          <li>Task</li>
          <li>Earned</li>
          <li>StartAt</li>
          <li>EndAt</li>
        </ul>
      </li>
      <li>
        {outsource.length != 0 ? (
          outsource.map(({ who, status, taskName, wage, startDate, deadline }) => (
            <ul className={styles.outsourcerow} key={startDate}>
              <li className={styles.address}>
                <span className={styles.left}>
                  <Jazzicon diameter={24} seed={jsNumberForAddress(who)} />
                </span>
                <span className={styles.right}>
                  <SubstrAddress address={who} />
                </span>
              </li>
              <li className={clsx(styles[`status${status}`])}>{statusOutsource[status]}</li>
              <li className={styles.tasks}> {taskName}</li>
              <li className={styles.earned}>
                {parseFloat(wage).toFixed(2)} {symbolToken}
              </li>
              <li> {dayjs.unix(startDate).format('HH:mm DD/MM/YYYY')}</li>
              <li> {dayjs.unix(deadline).format('HH:mm DD/MM/YYYY')}</li>
            </ul>
          ))
        ) : (
          <p className={styles.notx}>You dont have history of tx</p>
        )}
      </li>
    </ul>
  );
};
