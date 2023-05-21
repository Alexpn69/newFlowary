import clsx from 'clsx';
import styles from './Button.module.scss';

export const Button = ({
  disabled = false,
  onClick,
  className,
  style,
  children,
  loader = false,
  ...rest
}) => {
  return (
    <button
      className={clsx(className, styles.button, disabled && styles.disabled)}
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...rest}
    >
      {loader ? <div className={styles.loader}></div> : children}
    </button>
  );
};
