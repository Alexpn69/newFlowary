'use client';
import Link from 'next/link';
import styles from './TheHeader.module.scss';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { usePathname } from 'next/navigation';

export const TheHeader = ({ ...props }) => {
  const pathname = usePathname();
  return (
    <header {...props}>
      {pathname === '/' && (
        <Link href="/overview" className={styles.logo}>
          <h1>Flowary</h1>
        </Link>
      )}
      {pathname !== '/' && (
        <ConnectButton
          chainStatus="none"
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
        />
      )}
    </header>
  );
};
