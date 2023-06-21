import styles from './Gears.module.css';
import clsx from 'clsx';

export const Gears = () => {
  return (
    <div className={clsx(styles.gearbox)}>
      <div className={clsx(styles.overlay)}></div>
      <div className={clsx(styles.gear, styles.one)}>
        <div className={clsx(styles.gearinner)}>
          <div className={clsx(styles.bar)}></div>
          <div className={clsx(styles.bar)}></div>
          <div className={clsx(styles.bar)}></div>
        </div>
      </div>
      <div className={clsx(styles.gear, styles.two)}>
        <div className={clsx(styles.gearinner)}>
          <div className={clsx(styles.bar)}></div>
          <div className={clsx(styles.bar)}></div>
          <div className={clsx(styles.bar)}></div>
        </div>
      </div>
      <div className={clsx(styles.gear, styles.three)}>
        <div className={clsx(styles.gearinner)}>
          <div className={clsx(styles.bar)}></div>
          <div className={clsx(styles.bar)}></div>
          <div className={clsx(styles.bar)}></div>
        </div>
      </div>
      <div className={clsx(styles.gear, styles.four, styles.large)}>
        <div className={clsx(styles.gearinner)}>
          <div className={clsx(styles.bar)}></div>
          <div className={clsx(styles.bar)}></div>
          <div className={clsx(styles.bar)}></div>
          <div className={clsx(styles.bar)}></div>
          <div className={clsx(styles.bar)}></div>
        </div>
      </div>
    </div>
  );
};
