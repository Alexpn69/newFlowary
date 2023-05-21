'use client';

import Link from 'next/link';
import styles from './TheSidebar.module.scss';
import clsx from 'clsx';
import { Button } from '@/components/Button/Button';
import { usePathname } from 'next/navigation';
import {
  Change,
  Documentation,
  History,
  Internal,
  Logout,
  Outsource,
  Overview,
  Settings,
  Flowary,
} from '@/components';

export const TheSidebar = ({ ...props }) => {
  const pathname = usePathname();

  return (
    <div {...props}>
      <div className={styles.top}>
        <Link href="/" className={styles.logo}>
          <Flowary />
          Flowary
        </Link>
      </div>
      <ul className={styles.nav}>
        <li>
          <Link
            href="./Overview"
            className={clsx(
              styles.link,
              pathname.startsWith('/Overview') && styles.active
            )}
          >
            <Overview
              className={clsx(
                styles.svg,
                pathname.startsWith('/Overview') && styles.active
              )}
            />
            Overview
          </Link>
        </li>
        <li>
          <Link
            href="./InternalStaff"
            className={clsx(
              styles.link,
              pathname.startsWith('/InternalStaff') && styles.active
            )}
          >
            <Internal
              className={clsx(
                styles.svg,
                pathname.startsWith('/InternalStaff') && styles.active
              )}
            />
            Internal Staff
          </Link>
        </li>
        <li>
          <Link
            href="./OutsourcedWorkers"
            className={clsx(
              styles.link,
              pathname.startsWith('/OutsourcedWorkers') && styles.active
            )}
          >
            <Outsource
              className={clsx(
                styles.svg,
                pathname.startsWith('/OutsourcedWorkers') && styles.active
              )}
            />
            Outsourced Workers
          </Link>
        </li>
        <li>
          <Link
            href="./History"
            className={clsx(
              styles.link,
              pathname.startsWith('/History') && styles.active
            )}
          >
            <History
              className={clsx(
                styles.svg,
                pathname.startsWith('/History') && styles.active
              )}
            />
            History
          </Link>
        </li>
        <li>
          <Link
            href="./Settings"
            className={clsx(
              styles.link,
              pathname.startsWith('/Settings') && styles.active
            )}
          >
            <Settings
              className={clsx(
                styles.svg,
                pathname.startsWith('/Settings') && styles.active
              )}
            />
            Settings
          </Link>
        </li>
        <li>
          <Link
            href="./Documentation"
            className={clsx(
              styles.link,
              pathname.startsWith('/Documentation') && styles.active
            )}
          >
            <Documentation
              className={clsx(
                styles.svg,
                pathname.startsWith('/Documentation') && styles.active
              )}
            />
            Documentation
          </Link>
        </li>
      </ul>
      <ul className={styles.down}>
        <li>
          <Button className={styles.btn}>
            <Change className={styles.svg} />
            Change company
          </Button>
        </li>
        <li>
          <Button className={styles.btn}>
            <Logout className={styles.svg} />
            Log Out
          </Button>
        </li>
      </ul>
    </div>
  );
};
