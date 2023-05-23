'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from './CardCreate.module.scss';
import clsx from 'clsx';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import { CardForm } from '@/components';

export const CardCreate = () => {
  const [activeTab, setActiveTab] = useState('Connect Wallet');
  const { address: WalletAddress } = useAccount();
  const steps = ['Connect Wallet', 'Create Company', 'Set Token', 'Set Admin'];
  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  return (
    <div className={styles.create}>
      <div className={styles.menu}>
        {steps.map((step, index) => (
          <div
            key={step}
            className={clsx(styles.tabs, activeTab !== step && styles.active)}
            onClick={() => {
              setActiveTab(step);
            }}
          >
            <span>{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
      <div
        className={clsx(
          styles.content,
          activeTab === 'Connect Wallet' && styles.active
        )}
      >
        <ConnectButton />
      </div>
      <div
        className={clsx(
          styles.content,
          activeTab === 'Create Company' && styles.active
        )}
      >
        <CardForm
          label="Company"
          placeholder="Enter Company Name"
          button="Create"
        />
      </div>
      <div
        className={clsx(
          styles.content,
          activeTab === 'Set Token' && styles.active
        )}
      >
        <CardForm
          label="Address"
          placeholder="Enter Token Contract"
          button="Next"
        />
      </div>
      <div
        className={clsx(
          styles.content,
          activeTab === 'Set Admin' && styles.active
        )}
      >
        <CardForm label="Address" placeholder="Enter Admin" button="Next" />
      </div>
    </div>
  );
};
