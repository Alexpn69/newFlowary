'use client';
import { Button, InputForm, AccessDenied } from '@/components';
import styles from './page.module.scss';
import { contractSelector } from '@/store/reducers/contract/reducer';
import { useSelector } from 'react-redux';
import { useAccount } from 'wagmi';

export default function Settings() {
  const { owner, admin, role, token, liquidation } =
    useSelector(contractSelector);
  const { address: walletAddress } = useAccount();

  if (!walletAddress && role !== 'Spectator') {
    return <AccessDenied type="wallet" />;
  } else if (role === 'Owner' || role === 'Admin' || role === 'Spectator') {
    return (
      <div className={styles.wrapper}>
        <h2>Control Panel</h2>
        <div className={styles.box}>
          <h2>Owner now: {owner}</h2>
          <InputForm
            label="Address"
            placeholder="Enter New Owner"
            button="Set"
          />
        </div>
        <div className={styles.box}>
          <h2>Admin now: {admin}</h2>
          <InputForm
            label="Address"
            placeholder="Enter New Admin"
            button="Set"
          />
        </div>
        <div className={styles.box}>
          <h2>Buffer now: xxx hours:</h2>
          <InputForm
            label="Hours"
            placeholder="Enter New Hours "
            button="Set"
          />
        </div>
        <div className={styles.box}>
          <h2>Goerli Faucet: {token}</h2>
          <InputForm label="Amount" placeholder="Enter Amount" button="Claim" />
        </div>
        <div className={styles.payment}>
          <h3>Payment</h3>
          <div className={styles.wrap}>
            <Button className={styles.btn}>Load Deposit</Button>
            <Button className={styles.btn}>Withdraw Money</Button>
          </div>
        </div>
        <div className={styles.liquid}>
          <h3>Liquidation</h3>
          <h4>Happed if smart contract went bankrupt, and cant pay wages</h4>
          <p>Status : {String(liquidation)}</p>
        </div>
      </div>
    );
  } else if (role === 'Worker' || role === 'Outsourcer') {
    return <div>ты всего лишь работяга</div>;
  } else {
    return <AccessDenied />;
  }
}
