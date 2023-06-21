'use client';
import styles from './CompanyInfo.module.scss';
import { AdminLogo, ContractLogo, OwnerLogo } from '@/components';

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
            {address.substr(0, 5)}...{address.substr(-4)}
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
            {owner.substr(0, 5)}...{owner.substr(-4)}
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
            {admin.substr(0, 5)}...{admin.substr(-4)}
          </p>
        </div>
      </div>
    </div>
  );
};
