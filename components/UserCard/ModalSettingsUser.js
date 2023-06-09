import { Button, Loader, Notif } from '@/components';
import useDeleteEmployee from '@/logic/hooks/useDeleteEmployee';
import usePrepareCompanyContract from '@/logic/hooks/usePrepareCompanyContract';
import useRateChange from '@/logic/hooks/useRateChange';
import {
  contractSelector,
  setAmountEmployee,
  setArrEmployee,
} from '@/store/reducers/contract/reducer';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ModalSettingsUser = ({ setActive, who }) => {
  const newRateRef = useRef();
  const dispatch = useDispatch();
  const { decimalsToken } = useSelector(contractSelector);
  const { contractCompany, signedCompanyContract } = usePrepareCompanyContract();

  const {
    handleRateChange,
    isLoading: isRateChangeLoading,
    notif: rateChangeNotif,
    setNotif: setRateChangeNotif,
  } = useRateChange(
    signedCompanyContract,
    newRateRef,
    who,
    contractCompany,
    decimalsToken,
    dispatch,
    setArrEmployee,
    setActive
  );
  const {
    handleDelete,
    isLoading: isDeleteLoading,
    notif: deleteNotif,
    setNotif: setDeleteNotif,
  } = useDeleteEmployee(
    signedCompanyContract,
    contractCompany,
    who,
    decimalsToken,
    dispatch,
    setAmountEmployee,
    setArrEmployee,
    setActive
  );

  const onFormSubmit = (e) => {
    e.preventDefault();
    setDeleteNotif('');
    if (newRateRef.current.value !== '') {
      handleRateChange();
      newRateRef.current.value = '';
    } else {
      setRateChangeNotif('Enter something!');
      setTimeout(() => setRateChangeNotif(''), 5000);
    }
  };

  const onHandleDelete = () => {
    setRateChangeNotif('');
    handleDelete();
  };

  if (isRateChangeLoading || isDeleteLoading) {
    return <Loader />;
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          ref={newRateRef}
          type="number"
          name="Set new rate"
          id="Set new rate"
          placeholder="Enter new value of rate per hour"
          min="0"
        />
        <input type="submit" value="submit" />
      </form>
      <Button onClick={onHandleDelete}>Delete</Button>
      <Notif active={rateChangeNotif}>{rateChangeNotif}</Notif>
      <Notif active={deleteNotif}>{deleteNotif}</Notif>
    </>
  );
};
