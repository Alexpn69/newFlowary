'use client';
import Link from 'next/link';
import styles from './TheSidebar.module.scss';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import {
  InputForm,
  Change,
  Documentation,
  History,
  Internal,
  Logout,
  Modal,
  Outsource,
  Overview,
  Settings,
  Button,
  Notif,
} from '@/components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useConnectCompany } from '@/logic/hooks/useConnectCompany';

export const TheSidebar = ({ ...props }) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const { isLoading, notif, handleConnectCompany } = useConnectCompany();

  const handleCompany = async (companyName) => {
    const result = await handleConnectCompany(companyName, dispatch, router);
    if (result) {
      setModalActive2(false);
    }
  };

  return (
    <>
      <div {...props}>
        <Link href="./overview" className={styles.logo}>
          <span>Flowary</span>
        </Link>

        <ul className={styles.nav}>
          <li>
            <Link
              href="./overview"
              className={clsx(styles.link, pathname.startsWith('/overview') && styles.active)}
            >
              <Overview
                className={clsx(styles.svg, pathname.startsWith('/overview') && styles.active)}
              />
              Overview
            </Link>
          </li>
          <li>
            <Link
              href="./internalstaff"
              className={clsx(styles.link, pathname.startsWith('/internalstaff') && styles.active)}
            >
              <Internal
                className={clsx(styles.svg, pathname.startsWith('/internalstaff') && styles.active)}
              />
              Internal Staff
            </Link>
          </li>
          <li>
            <Link
              href="./outsourcedworkers"
              className={clsx(
                styles.link,
                pathname.startsWith('/outsourcedworkers') && styles.active
              )}
            >
              <Outsource
                className={clsx(
                  styles.svg,
                  pathname.startsWith('/outsourcedworkers') && styles.active
                )}
              />
              Outsourced Workers
            </Link>
          </li>
          <li>
            <Link
              href="./history"
              className={clsx(styles.link, pathname.startsWith('/history') && styles.active)}
            >
              <History
                className={clsx(styles.svg, pathname.startsWith('/history') && styles.active)}
              />
              History
            </Link>
          </li>
          <li>
            <Link
              href="./settings"
              className={clsx(styles.link, pathname.startsWith('/settings') && styles.active)}
            >
              <Settings
                className={clsx(styles.svg, pathname.startsWith('/settings') && styles.active)}
              />
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Alexpn69/newFlowary.git"
              className={clsx(styles.link)}
              target="_blank"
            >
              <Documentation className={clsx(styles.svg)} />
              Documentation
            </Link>
          </li>
        </ul>
        <ul className={styles.down}>
          <li>
            <Button
              className={styles.btn}
              onClick={() => {
                setModalActive2(true);
              }}
            >
              <Change className={styles.svg} />
              Change company
            </Button>
          </li>
          <li>
            <Button
              className={styles.btn}
              onClick={() => {
                setModalActive(true);
              }}
            >
              <Logout className={styles.svg} />
              Log Out
            </Button>
          </li>
        </ul>
        <Notif active={notif}>{notif}</Notif>
      </div>
      <Modal active={modalActive2} setActive={setModalActive2}>
        <InputForm
          label="Company"
          placeholder="Enter Company Name"
          button="Connect"
          handler={handleCompany}
          isLoading={isLoading}
        />
      </Modal>
      <Modal active={modalActive} setActive={setModalActive}>
        <Link onClick={() => setModalActive((prev) => !prev)} href="/" className={styles.btns}>
          <span>Really Close?</span>
        </Link>
      </Modal>
    </>
  );
};
