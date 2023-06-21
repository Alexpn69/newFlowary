import styles from './EmploeeWorkerCard.module.scss';
import useStartStopStream from '@/logic/hooks/useStartStopStream';
import { contractSelector } from '@/store/reducers/contract/reducer';
import { useSelector } from 'react-redux';
import { useAccount } from 'wagmi';
import { Button, Notif, Company, Loader, User, Gears } from '@/components';

export const EmploeeWorkerCard = () => {
  const { address: walletAddress } = useAccount();
  const { arrEmployee, address, symbolToken } = useSelector(contractSelector);

  const {
    isLoading,
    notif,
    isLoadingBalance,
    isActive,
    amountOfStream,
    handleWithdrawMoneyEmployee,
  } = useStartStopStream(walletAddress);

  const employee = walletAddress
    ? arrEmployee.find((employee) => employee.who === walletAddress)
    : undefined;

  return (
    <div className={styles.wrapper}>
      {employee ? (
        <>
          <h2 className={styles.title}>
            {isActive ? 'You are working now!' : 'You are chilling now!'}{' '}
          </h2>
          <ul className={styles.list}>
            <li>
              <User />
              <div>
                <h3>
                  {employee.who.substr(0, 5)}...{employee.who.substr(-4)}
                </h3>
                <p>
                  {employee.rate} {symbolToken}
                </p>
              </div>
            </li>
            <li>
              <Gears />
            </li>
            <li>
              <h3>
                {address.substr(0, 5)}...{address.substr(-4)}
              </h3>
              <Company />
            </li>
          </ul>
          {isActive ? (
            <div className={styles.counter}>
              <Button onClick={handleWithdrawMoneyEmployee} loader={isLoading} type="main">
                Withdraw money
              </Button>
              <span>
                <h3 className={styles.left}>
                  {isLoadingBalance ? <Loader /> : amountOfStream.toFixed(2)}
                </h3>
                <h4 className={styles.right}>{symbolToken}</h4>
              </span>
              <h5>Stream started : timestamp</h5>
            </div>
          ) : (
            <div className={styles.counter}>
              <h5>Stream ended : timestamp</h5>
            </div>
          )}
        </>
      ) : (
        <div className={styles.access}>You dont have active tasks!</div>
      )}
      <Notif active={notif}>{notif}</Notif>
    </div>
  );
};
