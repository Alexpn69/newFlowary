"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./CardCreate.module.scss";
import clsx from "clsx";
import { useState } from "react";
import { InputForm, Loader, Notif } from "@/components";
import useSetToken from "@/logic/hooks/useSetToken";
import useSetAdmin from "@/logic/hooks/useSetAdmin";
import { fullSteps } from "@/constants/listOfSteps";
import useCreateCompany from "@/logic/hooks/useCreateCompany";

export const CardCreate = () => {
  const [activeTab, setActiveTab] = useState("Connect Wallet");

  const {
    isLoading: isLoadingCreateCompany,
    notif: notifCreateCompany,
    handleCreateCompany,
  } = useCreateCompany();

  const {
    handleSetToken,
    isLoading: isLoadingSetToken,
    notif: notifSetToken,
  } = useSetToken();
  const {
    handleSetAdmin,
    isLoading: isLoadingSetAdmin,
    notif: notifSetAdmin,
  } = useSetAdmin();

  const handleCreate = async (name) => {
    try {
      handleCreateCompany(name, setActiveTab);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToken = async (name) => {
    try {
      handleSetToken(name, setActiveTab);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdmin = async (name) => {
    try {
      handleSetAdmin(name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.create}>
      <div className={styles.menu}>
        {fullSteps.map((step, index) => (
          <div
            key={step}
            className={clsx(styles.tabs, activeTab !== step && styles.active)}
          >
            <span>{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
      {
        <div
          className={clsx(
            styles.content,
            activeTab === "Connect Wallet" && styles.active
          )}
        >
          <ConnectButton />
          <button onClick={() => setActiveTab("Create Company")}>
            Next step
          </button>
        </div>
      }

      <>
        {activeTab === "Create Company" && (
          <div
            className={clsx(
              styles.content,
              activeTab === "Create Company" && styles.active
            )}
          >
            <InputForm
              label="Company"
              placeholder="Enter Company Name"
              button="Create"
              handler={handleCreate}
              isLoading={isLoadingCreateCompany}
            />
          </div>
        )}
        {activeTab === "Set Token" && (
          <>
            <p>Our test token: 0x7773324bCf2fA53E4f03Ee09cCEba2A6b481B9a7</p>
            <div
              className={clsx(
                styles.content,
                activeTab === "Set Token" && styles.active
              )}
            >
              <InputForm
                label="Address"
                placeholder="Enter Token Contract"
                button="Next"
                handler={handleToken}
                isLoading={isLoadingSetToken}
              />
            </div>
          </>
        )}
        {activeTab === "Set Admin" && (
          <div
            className={clsx(
              styles.content,
              activeTab === "Set Admin" && styles.active
            )}
          >
            <InputForm
              label="Address"
              placeholder="Enter Admin"
              button="Next"
              handler={handleAdmin}
              isLoading={isLoadingSetAdmin}
            />
          </div>
        )}
      </>
      <Notif active={notifCreateCompany}>{notifCreateCompany}</Notif>
      <Notif active={notifSetToken}>{notifSetToken}</Notif>
      <Notif active={notifSetAdmin}>{notifSetAdmin}</Notif>
    </div>
  );
};
