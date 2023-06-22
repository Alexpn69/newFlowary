'use client';
import styles from './CompanyInfo.module.scss';
import { AdminLogo, ContractLogo, OwnerLogo, SubstrAddress } from '@/components';

export const CompanyInfo = ({ name, address, owner, admin }) => {
  return (
    <div className={styles.company}>
      <h2>{name}</h2>
      <div className={styles.row}>
        <div className={styles.svg}>
          <ContractLogo />
        </div>
        <div className={styles.text}>
          <h3>Company Contract</h3>
          <p>
            <SubstrAddress address={address} />
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.svg}>
          <OwnerLogo />
        </div>
        <div className={styles.text}>
          <h3>Owner</h3>
          <p>
            <SubstrAddress address={owner} />
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.svg}>
          <AdminLogo />
        </div>
        <div className={styles.text}>
          <h3>Admin</h3>
          <p>
            <SubstrAddress address={admin} />
          </p>
        </div>
      </div>
    </div>
  );
};
