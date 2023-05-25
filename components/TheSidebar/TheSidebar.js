"use client";
import Link from "next/link";
import styles from "./TheSidebar.module.scss";
import clsx from "clsx";
import { Button } from "@/components/Button/Button";
import { usePathname, useRouter } from "next/navigation";
import {
  CardForm,
  Change,
  Documentation,
  History,
  Internal,
  Logout,
  Modal,
  Outsource,
  Overview,
  Settings,
} from "@/components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useConnectCompany } from "@/logic/hooks/useConnectCompany";

export const TheSidebar = ({ ...props }) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, text, handleConnectCompany } = useConnectCompany();

  const pathname = usePathname();
  const handleCompany = async (companyName) => {
    await handleConnectCompany(companyName, dispatch, router);
    setModalActive2(false);
  };

  return (
    <div {...props}>
      <Link href="/" className={styles.logo}>
        <span>Flowary</span>
      </Link>

      <ul className={styles.nav}>
        <li>
          <Link
            href="./overview"
            className={clsx(
              styles.link,
              pathname.startsWith("/overview") && styles.active
            )}
          >
            <Overview
              className={clsx(
                styles.svg,
                pathname.startsWith("/overview") && styles.active
              )}
            />
            Overview
          </Link>
        </li>
        <li>
          <Link
            href="./internalstaff"
            className={clsx(
              styles.link,
              pathname.startsWith("/internalstaff") && styles.active
            )}
          >
            <Internal
              className={clsx(
                styles.svg,
                pathname.startsWith("/internalstaff") && styles.active
              )}
            />
            Internal Staff
          </Link>
        </li>
        <li>
          <Link
            href="./outsourcedworkers"
            className={clsx(
              styles.link,
              pathname.startsWith("/outsourcedworkers") && styles.active
            )}
          >
            <Outsource
              className={clsx(
                styles.svg,
                pathname.startsWith("/outsourcedworkers") && styles.active
              )}
            />
            Outsourced Workers
          </Link>
        </li>
        <li>
          <Link
            href="./history"
            className={clsx(
              styles.link,
              pathname.startsWith("/history") && styles.active
            )}
          >
            <History
              className={clsx(
                styles.svg,
                pathname.startsWith("/history") && styles.active
              )}
            />
            History
          </Link>
        </li>
        <li>
          <Link
            href="./settings"
            className={clsx(
              styles.link,
              pathname.startsWith("/settings") && styles.active
            )}
          >
            <Settings
              className={clsx(
                styles.svg,
                pathname.startsWith("/settings") && styles.active
              )}
            />
            Settings
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Alexpn69/newFlowary.git"
            className={clsx(styles.link)}
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
      <Modal active={modalActive2} setActive={setModalActive2}>
        {loading ? <p>Loading...</p> : <CardForm handler={handleCompany} />}
        {text && <p>{text}</p>}{" "}
      </Modal>
      <Modal active={modalActive} setActive={setModalActive}>
        <Link href="/" className={styles.btns}>
          <span>Really Close?</span>
        </Link>
      </Modal>
    </div>
  );
};
