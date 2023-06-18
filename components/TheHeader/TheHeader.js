"use client";
import Link from "next/link";
import styles from "./TheHeader.module.scss";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { contractSelector } from "@/store/reducers/contract/reducer";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import useRole from "@/logic/hooks/useRole";

export const TheHeader = ({ ...props }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { address: walletAddress } = useAccount();
  const { name, role, balance, symbolToken } = useSelector(contractSelector);

  const handleInfoHover = () => {
    setIsOpen(true);
  };
  const handleInfoLeave = () => {
    setIsOpen(false);
  };
  useRole();
  return (
    <header {...props}>
      {/* {pathname === "/" && (
        <Link href="/overview" className={styles.logo}>
          <h1>Flowary</h1>
        </Link>
      )} */}
      {pathname !== "/" && (
        <>
          {walletAddress ? (
            <div
              className={styles.info}
              onMouseEnter={handleInfoHover}
              onMouseLeave={handleInfoLeave}
            >
              <span>info</span>
            </div>
          ) : (
            <ConnectButton
              chainStatus="none"
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
            />
          )}
        </>
      )}
      <ul
        className={clsx(styles.wrapper, isOpen && styles.active)}
        onMouseEnter={handleInfoHover}
        onMouseLeave={handleInfoLeave}
      >
        <li>
          <p>Company</p> <span>{name}</span>
        </li>
        <li>
          <p>Your role</p> <span>{role}</span>
        </li>
        <li>
          <p>Balance</p>
          <span>
            {parseFloat(balance).toFixed(2)} {symbolToken}
          </span>
        </li>
        <li>
          <ConnectButton
            chainStatus="none"
            showBalance={{
              smallScreen: false,
              largeScreen: true,
            }}
          />
        </li>
      </ul>
    </header>
  );
};
