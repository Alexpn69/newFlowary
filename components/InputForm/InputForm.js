'use client';
import { useRef, useState } from 'react';
import styles from './InputForm.module.scss';
import { Loader, Notif } from '@/components';

export const InputForm = ({
  info = '',
  label = '',
  placeholder = '',
  button = '',
  handler,
  isLoading,
  type = 'text',
  min = '',
}) => {
  const nameRef = useRef();
  const [notifLocal, setNotifLocal] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    setNotifLocal('');
    if (nameRef.current.value !== '') {
      handler && handler(nameRef.current.value);
      nameRef.current.value = '';
    } else {
      setNotifLocal('Enter something!');
      setTimeout(() => setNotifLocal(''), 5000);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <form className={styles.form} onSubmit={onFormSubmit}>
          <div className={styles.wrap}>
            <label htmlFor={label}>{label}:</label>
            <input
              ref={nameRef}
              type={type}
              name={label}
              id={label}
              placeholder={placeholder}
              {...(min && { min })}
            />
          </div>
          <input type="submit" value={button} />
          {info && <p>{info}</p>}
          <Notif active={notifLocal}>{notifLocal}</Notif>
        </form>
      )}
    </>
  );
};
