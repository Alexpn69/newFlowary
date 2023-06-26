"use client";
import clsx from "clsx";
import "./globals.scss";
import styles from "./layout.module.scss";
import { TheSidebar, TheHeader, Hamburger, Button } from "@/components";
import { usePathname } from "next/navigation";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store";
import { useEffect, useState } from "react";

const metadata = {
  title: "Flowary",
  description: "best dapp ever",
};

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "flowary",
  projectId: "3c62f87484ed687c3432d402676bccb5",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1250) {
        setHamburger(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <WagmiConfig config={wagmiConfig}>
              <RainbowKitProvider
                chains={chains}
                theme={lightTheme({
                  accentColor: "#1c305a",
                  accentColorForeground: "white",
                  borderRadius: "medium",
                  fontStack: "system",
                })}
              >
                <div
                  className={clsx(
                    pathname !== "/" ? styles.container : styles.lendcontainer
                  )}
                >
                  <TheSidebar
                    className={clsx(
                      pathname !== "/" ? styles.sidebar : styles.lendsidebar,
                      hamburger && styles.active
                    )}
                    onClick={() => setHamburger(false)}
                  />
                  {pathname !== "/" && (
                    <Button
                      onClick={() => setHamburger((prev) => !prev)}
                      className={clsx(
                        styles.hamburger,
                        hamburger && styles.active
                      )}
                      type="svg"
                    >
                      <Hamburger />
                    </Button>
                  )}
                  <TheHeader
                    className={clsx(
                      pathname !== "/" ? styles.header : styles.lendheader
                    )}
                  />
                  <main
                    className={clsx(
                      pathname !== "/" ? styles.main : styles.lendmain
                    )}
                  >
                    {children}
                  </main>
                </div>
              </RainbowKitProvider>
            </WagmiConfig>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
