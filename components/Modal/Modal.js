import { Button, Close } from '@/components';
import styles from './Modal.module.scss';
import clsx from 'clsx';

export const Modal = ({ active, setActive, children }) => {
  return (
    <div className={clsx(styles.modal, active && styles.active)} onClick={() => setActive(false)}>
      <div className={clsx(styles.modal__content)} onClick={(e) => e.stopPropagation()}>
        <Button className={clsx(styles.btn)} onClick={() => setActive(false)} type="svg">
          <Close />
        </Button>
        {children}
      </div>
    </div>
  );
};
