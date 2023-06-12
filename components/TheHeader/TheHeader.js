"use client";
import Link from "next/link";
import styles from "./TheHeader.module.scss";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { contractSelector, setRole } from "@/store/reducers/contract/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";

export const TheHeader = ({ ...props }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { address: walletAddress } = useAccount();
  const {
    address,
    name,
    owner,
    role,
    admin,
    arrOutsource,
    arrEmployee,
    balance,
    symbolToken,
  } = useSelector(contractSelector);

  const handleInfoHover = () => {
    setIsOpen(true);
  };
  const handleInfoLeave = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (pathname !== "/") {
      if (walletAddress === owner) {
        dispatch(setRole("Owner"));
      } else if (walletAddress === admin) {
        dispatch(setRole("Admin"));
      } else if (
        arrEmployee.find((employee) => employee.who === walletAddress) &&
        arrOutsource.find((outsource) => outsource.who === walletAddress)
      ) {
        dispatch(setRole("Worker"));
      } else if (
        arrEmployee.find((employee) => employee.who === walletAddress)
      ) {
        dispatch(setRole("Employee"));
      } else if (
        arrOutsource.find((outsource) => outsource.who === walletAddress)
      ) {
        dispatch(setRole("Outsourcer"));
      } else if (address === "0x3598f3a5A8070340Fde9E9cEcaF6F1F0129b323a") {
        dispatch(setRole("Spectator"));
      } else {
        dispatch(setRole("Guest"));
      }
    }
  }, [
    address,
    admin,
    arrEmployee,
    arrOutsource,
    dispatch,
    owner,
    pathname,
    walletAddress,
  ]);

  return (
    <header {...props}>
      {pathname === "/" && (
        <Link href="/overview" className={styles.logo}>
          <h1>Flowary</h1>
        </Link>
      )}
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
