'use client';
import styles from './LendingCard.module.scss';
import { Button, InputForm, CardCreate, Loader, Notif } from '@/components';
import clsx from 'clsx';
import { useConnectDemo } from '@/logic/hooks/useConnectDemo';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useConnectCompany } from '@/logic/hooks/useConnectCompany';

export const LendingCard = ({ activeTab, setActiveTab }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoading, notif, handleConnectCompany } = useConnectCompany();

  const { isLoading: isLoadingDemo, notif: notifDemo, handleConnectDemo } = useConnectDemo();

  const handleCompany = (companyName) => {
    handleConnectCompany(companyName, dispatch, router);
  };

  const handleDemo = () => {
    handleConnectDemo(dispatch, router);
  };

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
      <div className={clsx(styles.content, activeTab === 'create' && styles.active)}>
        <CardCreate />
      </div>
      <div className={clsx(styles.content, activeTab === 'exist' && styles.active)}>
        {isLoading ? (
          <Loader />
        ) : (
          <InputForm
            label="Company"
            placeholder="Enter Company Name"
            button="Connect"
            handler={handleCompany}
          />
        )}
      </div>
      <div className={clsx(styles.content, activeTab === 'demo' && styles.active)}>
        {isLoadingDemo ? (
          <Loader />
        ) : (
          <Button className={styles.demo} onClick={handleDemo}>
            Start Demo Version
          </Button>
        )}
      </div>
      {notif !== 'Success' && notifDemo !== 'Success' && (
        <>
          <Notif active={notif}>{notif}</Notif>
          <Notif active={notifDemo}>{notifDemo}</Notif>
        </>
      )}
    </div>
  );
};
