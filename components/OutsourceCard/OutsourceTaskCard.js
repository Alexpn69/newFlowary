import styles from './OutsourceCard.module.scss';
import dayjs from 'dayjs';
import {
  Modal,
  Button,
  ModalSettingsOutsource,
  WageDynamic,
  Setting,
  SubstrAddress,
} from '@/components';
import { useState } from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import clsx from 'clsx';

export const OutsourceTaskCard = ({
  who,
  wage,
  taskName,
  startDate,
  deadline,
  id,
  status,
  symbolToken,
}) => {
  const [active, setActive] = useState(false);
  const activeStream = deadline > dayjs().unix();

  const statusOutsource = { 1: 'Waiting for claim', 2: 'Waiting for accept', 3: 'Finished' };

  return (
    <ul className={styles.container}>
      <li>
        <Jazzicon diameter={48} seed={jsNumberForAddress(who)} />
        <h3>
          <SubstrAddress address={who} />
        </h3>
      </li>
      <li>{taskName}</li>
      <li>
        {activeStream ? (
          <span>
            <WageDynamic
              wage={wage}
              startDate={startDate}
              deadline={deadline}
              className={styles.left}
            />
            <h4 className={styles.right}>{symbolToken}</h4>
          </span>
        ) : (
          <h6>Job is ended</h6>
        )}
      </li>
      <li className={clsx(styles[`status${status}`])}>{statusOutsource[status]}</li>
      <li className={styles.settings}>
        <Button onClick={() => setActive(true)} className={styles.btnsvg}>
          <Setting className={styles.svg} />
        </Button>
      </li>
      <Modal active={active} setActive={setActive} status={status} id={id}>
        <ModalSettingsOutsource
          status={status}
          id={id}
          setActive={setActive}
          who={who}
          wage={wage}
          startDate={startDate}
          deadline={deadline}
          activeStream={activeStream}
          symbolToken={symbolToken}
        />
      </Modal>
    </ul>
  );
};
