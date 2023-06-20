import { InputForm, Notif } from '@/components';
import usePrepareCompanyContract from '@/logic/hooks/usePrepareCompanyContract';
import useRateChange from '@/logic/hooks/useRateChange';
import { contractSelector, setArrEmployee } from '@/store/reducers/contract/reducer';
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

  return (
    <>
      <InputForm
        type="number"
        label="Rate"
        placeholder="Enter new value"
        button="Change"
        handler={handleRateChange}
        isLoading={isRateChangeLoading}
        min="0"
      />
      <Notif active={rateChangeNotif}>{rateChangeNotif}</Notif>
    </>
  );
};
