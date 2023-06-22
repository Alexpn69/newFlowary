import styles from './Loader.module.scss';
import clsx from 'clsx';
export const Loader = ({ color = '', className }) => {
  return <div className={clsx(styles.loader, styles[color], className)}></div>;
};
