'use client';
import Link from 'next/link';
import styles from './LendingCard.module.scss';
import { Button, CardForm, CardCreate } from '@/components';
import clsx from 'clsx';

export const LendingCard = ({ activeTab, setActiveTab }) => {
  return (
    <div className={styles.card}>
      <div className={styles.nav}>
        <Button
          className={clsx(styles.btn, activeTab === 'create' && styles.active)}
          onClick={() => setActiveTab('create')}
          style={{ borderRadius: '26px 0 0 0' }}
        >
          Create
        </Button>
        <Button
          className={clsx(styles.btn, activeTab === 'exist' && styles.active)}
          onClick={() => setActiveTab('exist')}
        >
          Exist
        </Button>
        <Button
          className={clsx(styles.btn, activeTab === 'demo' && styles.active)}
          onClick={() => setActiveTab('demo')}
          style={{ borderRadius: '0 26px 0 0' }}
        >
          Demo
        </Button>
      </div>
      <div
        className={clsx(
          styles.content,
          activeTab === 'create' && styles.active
        )}
      >
        <CardCreate />
      </div>
      <div
        className={clsx(styles.content, activeTab === 'exist' && styles.active)}
      >
        <CardForm />
      </div>
      <div
        className={clsx(styles.content, activeTab === 'demo' && styles.active)}
      >
        <Button className={styles.demo}>Start Demo Version</Button>
      </div>
    </div>
  );
};
