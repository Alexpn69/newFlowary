import styles from './OutsourceCard.module.scss';
import { Button, Loader, Notif } from '@/components';
import useOutsourceActions from '@/logic/hooks/useOutsourceActions';
import dayjs from 'dayjs';

export const ModalSettingsOutsource = ({
  id,
  status,
  setActive,
  who,
  wage,
  startDate,
  deadline,
  activeStream,
  symbolToken,
}) => {
  const { isLoading, notif, handleClaim, handleFinishJob } = useOutsourceActions(id, setActive);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapinfo}>
      <p>Outsourcer: {who}</p>
      <p>
        Earn: {wage} {symbolToken}
      </p>
      <p>Start date: {dayjs.unix(startDate).format('HH:mm DD/MM/YYYY')}</p>
      <p>Finish date: {dayjs.unix(deadline).format('HH:mm DD/MM/YYYY')}</p>
      <Button onClick={handleFinishJob} disabled={status !== 2} loader={isLoading} type="main">
        {status === 2 ? 'To accept and pay for the completed work' : 'Waiting for finish...'}
      </Button>
      <Notif active={notif}>{notif}</Notif>
    </div>
  );
};
