"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./CardCreate.module.scss";
import clsx from "clsx";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { CardForm } from "@/components";
import { cuttenSteps, fullSteps } from "@/constants/listOfSteps";
import { useDispatch } from "react-redux";
import handleCreateCompany from "@/logic/functions/createCompany";
import useSetToken from "@/logic/hooks/useSetToken";
import { useRouter } from "next/navigation";
import useSetAdmin from "@/logic/hooks/useSetAdmin";

export const CardCreate = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [existedName, setExistedName] = useState("");
  const [loading, setLoading] = useState(false);
  const { address: walletAddress } = useAccount();
  const steps = walletAddress ? cuttenSteps : fullSteps;
  const initialStep = walletAddress ? "Create Company" : "Connect Wallet";
  const [activeTab, setActiveTab] = useState(initialStep);
  useEffect(() => {
    console.log(activeTab);
    walletAddress && setActiveTab("Create Company");
  }, [activeTab, walletAddress]);

  const handleCreate = async (name) => {
    try {
      handleCreateCompany(
        name,
        setExistedName,
        dispatch,
        setLoading,
        setActiveTab
      );
    } catch (error) {
      console.log(error);
    }
  };
  const { handleSetToken, loadingToken } = useSetToken();
  const handleToken = async (name) => {
    try {
      handleSetToken(name, setActiveTab, dispatch);
    } catch (error) {
      console.log(error);
    }
  };
  const { handleSetAdmin, loadingAdmin } = useSetAdmin();
  const handleAdmin = async (name) => {
    try {
      handleSetAdmin(name, dispatch, router);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.create}>
      <div className={styles.menu}>
        {steps.map((step, index) => (
          <div
            key={step}
            className={clsx(styles.tabs, activeTab !== step && styles.active)}
            onClick={() => {
              setActiveTab(step);
            }}
          >
            <span>{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
      {!walletAddress && (
        <div
          className={clsx(
            styles.content,
            activeTab === "Connect Wallet" && styles.active
          )}
        >
          <ConnectButton />
        </div>
      )}
      {activeTab === "Create Company" && (
        <div
          className={clsx(
            styles.content,
            activeTab === "Create Company" && styles.active
          )}
        >
          {loading ? (
            <p>Creating...</p>
          ) : (
            <CardForm
              label="Company"
              placeholder="Enter Company Name"
              button="Create"
              handler={handleCreate}
            />
          )}
          {existedName}
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
            {loadingToken ? (
              <p>Loading...</p>
            ) : (
              <CardForm
                label="Address"
                placeholder="Enter Token Contract"
                button="Next"
                handler={handleToken}
              />
            )}
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
          {loadingAdmin ? (
            <p>Loading...</p>
          ) : (
            <CardForm
              label="Address"
              placeholder="Enter Admin"
              button="Next"
              handler={handleAdmin}
            />
          )}
        </div>
      )}
    </div>
  );
};
