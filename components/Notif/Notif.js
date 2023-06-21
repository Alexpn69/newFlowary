import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Notif.module.scss';
import { Close, Button } from '@/components';

export const Notif = ({ active, children }) => {
  const [isVisible, setIsVisible] = useState(active);

  useEffect(() => {
    setIsVisible(active);
    if (active) {
      const timeout = setTimeout(() => {
        hideNotification();
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [active]);

  const hideNotification = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div
        className={clsx(styles.box, active !== 'Success!' && styles.red)}
        onClick={(e) => e.stopPropagation()}
      >
        <Button className={clsx(styles.btn)} onClick={() => setIsVisible(false)} type="svg">
          <Close className={clsx(styles.svg)} />
        </Button>
        {children}
      </div>
    )
  );
};
