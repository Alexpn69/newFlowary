import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Notif.module.scss';

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
      <div className={clsx(styles.box)} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    )
  );
};
