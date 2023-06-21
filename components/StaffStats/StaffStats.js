'use client';
import styles from './StaffStats.module.scss';
import { Button } from '@/components/Button/Button';
import { ChangeLogo } from '@/components';
import { useState } from 'react';

export const StaffStats = ({
  totalValueStreams,
  totalValueOutsource,
  arrOutsource,
  arrEmployee,
  arrayBlock,
  symbolToken,
}) => {
  const [staff, setStaff] = useState(false);

  return (
    <div className={styles.staff}>
      <div className={styles.head}>
        {staff ? 'Outsorce Stats' : 'Internal Stats'}
        <Button className={styles.btn} onClick={() => setStaff((prev) => !prev)}>
          <ChangeLogo className={styles.svg} />
        </Button>
      </div>
      <div className={styles.row}>
        <h3>Stream Value</h3>
        <h4>
          <span>
            {parseFloat(staff ? totalValueOutsource : totalValueStreams).toFixed(2)} {symbolToken}
          </span>
        </h4>
      </div>
      <div className={styles.row}>
        <h3>Stream Count</h3>
        <h4>
          <span>{staff ? arrOutsource.length : arrayBlock.length}</span>
        </h4>
      </div>
      <div className={styles.row}>
        <h3>All Performers</h3>
        <h4>
          <span>{staff ? arrOutsource.length : arrEmployee.length}</span>
        </h4>
      </div>
    </div>
  );
};
