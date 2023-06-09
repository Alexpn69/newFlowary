'use client';
import { useRef, useState } from 'react';
import styles from './InputForm.module.scss';
import { Notif } from '@/components';

export const InputForm = ({ label = '', placeholder = '', button = '', handler }) => {
  const nameRef = useRef();
  const [notif, setNotif] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    setNotif('');
    if (nameRef.current.value !== '') {
      handler && handler(nameRef.current.value);
      nameRef.current.value = '';
    } else {
      setNotif('Enter something!');
      setTimeout(() => setNotif(''), 5000);
    }
  };

  return (
    <form className={styles.exist} onSubmit={onFormSubmit}>
      <div className={styles.wrap}>
        <label htmlFor="company">{label}:</label>
        <input ref={nameRef} type="text" name={label} id={label} placeholder={placeholder} />
      </div>
      <input type="submit" value={button} />
      <Notif active={notif}>{notif}</Notif>
    </form>
  );
};
