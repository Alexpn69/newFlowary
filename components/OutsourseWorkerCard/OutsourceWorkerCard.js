import styles from './OutsourceWorkerCard.module.scss';
import { contractSelector } from '@/store/reducers/contract/reducer';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { useAccount } from 'wagmi';
import { Button, Company, Freelancer, Loader, Notif, WageDynamic } from '@/components';

export const OutsourceWorkerCard = () => {
  const { arrOutsource, symbolToken, address } = useSelector(contractSelector);
  const { address: walletAddress } = useAccount();

  const employee = walletAddress
    ? arrOutsource.find((outsource) => outsource.who === walletAddress)
    : undefined;
  const activeStream = employee?.deadline > dayjs().unix();

  return (
    <div className={styles.wrapper}>
      {employee ? (
        <>
          <h2 className={styles.title}>
            {activeStream ? 'You are freelancing now!' : 'You are chilling now!'}
          </h2>
          <ul className={styles.list}>
            <li>
              <Freelancer />
              <h3>
                {employee.who.substr(0, 5)}...{employee.who.substr(-4)}
              </h3>
            </li>
            <li>
              <p>гифка</p>
            </li>
            <li>
              <h3>
                {address.substr(0, 5)}...{address.substr(-4)}
              </h3>
              <Company />
            </li>
          </ul>

          <div className={styles.counter}>
            <Button type="main">Finish work</Button>
            {activeStream && (
              <span>
                <WageDynamic
                  wage={employee.wage}
                  startDate={employee.startDate}
                  deadline={employee.deadline}
                  className={styles.left}
                />
                <h4 className={styles.right}>{symbolToken}</h4>
              </span>
            )}

            <h5>Task: {employee.taskName}</h5>
            <p>Total wage : 300? {symbolToken}</p>
            <p>Stream started : timestamp</p>
            <p>Stream deadline : timestamp</p>
          </div>
        </>
      ) : (
        <div className={styles.access}>You dont have active tasks!</div>
      )}
      {/* <Notif active={notif}>{notif}</Notif> */}
    </div>
  );
};
