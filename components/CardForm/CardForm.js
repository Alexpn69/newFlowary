'use client';
import styles from './CardForm.module.scss';
import clsx from 'clsx';

export const CardForm = ({
  label = 'Company',
  placeholder = 'Enter Company Name',
  button = 'Connect',
}) => {
  return (
    <form className={styles.exist}>
      <div className={styles.wrap}>
        <label htmlFor="company">{label}:</label>
        <input
          type="text"
          name="company"
          id="company"
          placeholder={placeholder}
        />
      </div>
      <input type="submit" value={button} />
    </form>
  );
};
