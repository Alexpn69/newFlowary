import styles from './TheHeader.module.scss';
import { Button } from '@/components';
export const TheHeader = ({ ...props }) => {
  return (
    <div {...props}>
      <div className={styles.wrap}>
        <Button>Connect Wallet</Button>
      </div>
    </div>
  );
};
