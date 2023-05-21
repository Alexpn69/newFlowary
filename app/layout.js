'use client';
import clsx from 'clsx';
import './globals.scss';
import styles from './layout.module.scss';
import { TheSidebar, TheHeader, Overview } from '@/components';
import { usePathname } from 'next/navigation';
const metadata = {
  title: 'Flowary',
  description: 'best dapp ever',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          {pathname !== '/' && <TheSidebar className={styles.sidebar} />}
          <div className={styles.wrapper}>
            {pathname !== '/' && <TheHeader className={styles.header} />}
            <main
              className={clsx(pathname === '/' ? styles.lending : styles.main)}
            >
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
