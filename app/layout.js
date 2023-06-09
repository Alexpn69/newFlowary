'use client';
import clsx from 'clsx';
import './globals.scss';

import styles from './layout.module.scss';
import { TheSidebar, TheHeader } from '@/components';
import { usePathname } from 'next/navigation';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/store';

const metadata = {
  title: 'Flowary',
  description: 'best dapp ever',
};

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'flowary',
  projectId: '3c62f87484ed687c3432d402676bccb5',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <WagmiConfig config={wagmiConfig}>
              <RainbowKitProvider
                chains={chains}
                theme={lightTheme({
                  accentColor: '#1c305a',
                  accentColorForeground: 'white',
                  borderRadius: 'medium',
                  fontStack: 'system',
                })}
              >
                <div className={styles.container}>
                  {pathname !== '/' && (
                    <TheSidebar className={styles.sidebar} />
                  )}
                  <div
                    className={clsx(
                      pathname !== '/' ? styles.wrapper : styles.lendwrapper
                    )}
                  >
                    <TheHeader
                      className={clsx(
                        pathname !== '/' ? styles.header : styles.lendheader
                      )}
                    />
                    <main
                      className={clsx(
                        pathname !== '/' ? styles.main : styles.lendmain
                      )}
                    >
                      {children}
                    </main>
                  </div>
                </div>
              </RainbowKitProvider>
            </WagmiConfig>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
