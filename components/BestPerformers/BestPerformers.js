'use client';
import { useSelector } from 'react-redux';
import { contractSelector } from '@/store/reducers/contract/reducer';
import styles from './BestPerformers.module.scss';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { SubstrAddress } from '@/components';

export const BestPerformers = () => {
  const { arrEmployee } = useSelector(contractSelector);

  const sortedEmployees =
    arrEmployee && arrEmployee.length > 0
      ? [...arrEmployee].sort((a, b) => b.rate - a.rate).slice(0, 7)
      : [];

  return (
    <div>
      <h2 className={styles.subtitle}>Bestperformers</h2>
      <div className={styles.list}>
        <ul className={styles.top}>
          <li>Address</li>
          <li>Rate</li>
          <li>Total Value</li>
        </ul>
        {sortedEmployees.length > 0 ? (
          sortedEmployees.map((arrEmployee, index) => (
            <ul className={styles.grid} key={arrEmployee.who}>
              <li>
                <span>{index + 1}</span>
                <Jazzicon diameter={24} seed={jsNumberForAddress(arrEmployee.who)} />
                <div>
                  <SubstrAddress address={arrEmployee.who} />
                </div>
              </li>
              <li>{arrEmployee.rate}</li>
              <li>xxx</li>
            </ul>
          ))
        ) : (
          <p>Add Employee!</p>
        )}
      </div>
    </div>
  );
};
