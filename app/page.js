'use client';
import styles from './page.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { Button, LendingCard } from '@/components';
import { titles } from '@/constants/lendingTitle';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className={styles.left}>
        {activeTab === 0 ? (
          <Button className={styles.btn} onClick={() => setActiveTab('create')}>
            Get Started
          </Button>
        ) : (
          <LendingCard activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
      </div>
      <div className={styles.right}>
        <h2>{titles[activeTab].title}</h2>
        <p>{titles[activeTab].desc}</p>
      </div>
    </>
  );
}
