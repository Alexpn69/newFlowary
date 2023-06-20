import { Loader, Notif } from '@/components';
import useAddEmployee from '@/logic/hooks/useAddEmployee';
import { useRef } from 'react';
import styles from './EmploeeCard.module.scss';

export const ModalAddNewUser = ({ setActive }) => {
  const rateRef = useRef();
  const addressUserRef = useRef();

  const { handleNewUser, isLoading, notif, setNotif } = useAddEmployee(
    setActive,
    addressUserRef,
    rateRef
  );

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (addressUserRef.current.value !== '' && rateRef.current.value !== '') {
      handleNewUser();
      addressUserRef.current.value = '';
      rateRef.current.value = '';
    } else {
      setNotif('Enter something!');
      setTimeout(() => setNotif(''), 5000);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <form onSubmit={onFormSubmit} className={styles.form}>
      <div className={styles.wrap}>
        <label htmlFor="Address">Address:</label>
        <input
          ref={addressUserRef}
          type="string"
          name="Address"
          id="Address"
          placeholder="Enter new address"
        />
      </div>
      <div className={styles.wrap}>
        <label htmlFor="Rate">Rate:</label>
        <input
          ref={rateRef}
          type="number"
          name="Rate"
          id="Rate"
          placeholder="Enter new rate"
          min="0"
        />
      </div>
      <input type="submit" value="submit" />
      <Notif active={notif}>{notif}</Notif>
    </form>
  );
};
