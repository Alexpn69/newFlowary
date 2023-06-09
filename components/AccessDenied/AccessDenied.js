import clsx from 'clsx';
import styles from './AccessDenied.module.scss';

export const AccessDenied = ({ type = '' }) => {
  return (
    <div className={clsx(styles.box)}>
      {type === 'wallet'
        ? 'Connect your Wallet!'
        : 'You are not a owner/employee or you dont have enougth rigths of access!'}
    </div>
  );
};
