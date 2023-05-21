'use client';
import Link from 'next/link';
import styles from './page.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { Button } from '@/components';

export default function Home() {
  const [actveTab, setActiveTab] = useState(0);
  return (
    <>
      {actveTab === 0 ? (
        <Button className={styles.btn} onClick={() => setActiveTab(1)}>
          Start
        </Button>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.nav}>
            <Button
              className={clsx(styles.btn, actveTab === 1 && styles.active)}
              onClick={() => setActiveTab(1)}
            >
              Create Company
            </Button>
            <Button
              className={clsx(styles.btn, actveTab === 2 && styles.active)}
              onClick={() => setActiveTab(2)}
            >
              Company Exist
            </Button>
            <Button
              className={clsx(styles.btn, actveTab === 3 && styles.active)}
              onClick={() => setActiveTab(3)}
            >
              Demo
            </Button>
          </div>
          <div className={clsx(styles.down, actveTab === 1 && styles.active)}>
            <div className={styles.content}>First tab panel</div>
          </div>
          <div className={clsx(styles.down, actveTab === 2 && styles.active)}>
            <form className={styles.form}>
              <div className={styles.wrap}>
                <label htmlFor="company">Company name:</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Company"
                />
              </div>
              <input type="submit" value="Добавить" />
            </form>
          </div>
          <div className={clsx(styles.down, actveTab === 3 && styles.active)}>
            <div className={styles.content}>Third tab panel</div>
          </div>
        </div>
      )}
    </>
  );
}
