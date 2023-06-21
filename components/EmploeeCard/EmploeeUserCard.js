'use client';
import styles from './EmploeeCard.module.scss';
import { useState } from 'react';
import useStartStopStream from '@/logic/hooks/useStartStopStream';
import { Button, Delete, Loader, Modal, ModalSettingsUser, Notif, Setting } from '@/components';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import useDeleteEmployee from '@/logic/hooks/useDeleteEmployee';
import usePrepareCompanyContract from '@/logic/hooks/usePrepareCompanyContract';
import {
  contractSelector,
  setAmountEmployee,
  setArrEmployee,
} from '@/store/reducers/contract/reducer';
import { useDispatch, useSelector } from 'react-redux';

export const EmploeeUserCard = ({ who, rate, symbolToken }) => {
  const [active, setActive] = useState(false);
  const { contractCompany, signedCompanyContract } = usePrepareCompanyContract();
  const { decimalsToken } = useSelector(contractSelector);
  const dispatch = useDispatch();
  const {
    isLoading,
    notif,
    isLoadingBalance,
    isActive,
    amountOfStream,
    hadleStartStream,
    hadleStopStream,
  } = useStartStopStream(who);

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

  return (
    <>
      <ul className={styles.container}>
        <li>
          <Jazzicon diameter={48} seed={jsNumberForAddress(who)} />
          <div className={styles.user}>
            <h3>
              {who.substr(0, 5)}...{who.substr(-4)}
            </h3>
            <h4>
              {rate} {symbolToken}
            </h4>
          </div>
        </li>
        <li>
          {
            <Button
              onClick={!isActive ? hadleStartStream : hadleStopStream}
              type="main"
              color={isActive ? 'red' : 'green'}
              loader={isLoading}
            >
              {!isActive ? 'Start stream' : 'Stop stream'}
            </Button>
          }
        </li>
        <li>
          {isActive ? (
            <span>
              {isLoadingBalance ? (
                <Loader />
              ) : (
                <>
                  <h3 className={styles.left}>{amountOfStream.toFixed(2)}</h3>
                  <h4 className={styles.right}>{symbolToken}</h4>
                </>
              )}
            </span>
          ) : (
            <h6>Stream stopped</h6>
          )}
        </li>
        <li className={styles.settings}>
          <Button onClick={() => setActive(true)} className={styles.btnsvg}>
            <Setting className={styles.svg} />
          </Button>
          <Button onClick={handleDelete} className={styles.btnsvg}>
            {isDeleteLoading ? <Loader /> : <Delete className={styles.svg} />}
          </Button>
        </li>
      </ul>
      <Modal active={active} setActive={setActive}>
        <ModalSettingsUser setActive={setActive} who={who} />
      </Modal>
      <Notif active={notif}>{notif}</Notif>
      <Notif active={deleteNotif}>{deleteNotif}</Notif>
    </>
  );
};
