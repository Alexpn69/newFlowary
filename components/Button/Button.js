import clsx from 'clsx';
import styles from './Button.module.scss';

export const Button = ({
  disabled = false,
  onClick,
  className,
  style,
  children,
  loader = false,
  type = '',
  color = '',
  ...rest
}) => {
  return (
    <button
      className={clsx(
        className,
        styles.button,
        type && styles[type],
        color && styles[color],
        disabled && styles.disabled,
        loader && styles.disabled
      )}
      disabled={disabled || loader}
      onClick={!disabled ? onClick : undefined}
      style={style}
      {...rest}
    >
      {loader ? <div className={styles.loader}></div> : children}
    </button>
  );
};
