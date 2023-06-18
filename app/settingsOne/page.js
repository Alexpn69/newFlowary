"use client";
import {
  Button,
  InputForm,
  AccessDenied,
  Notif,
  Loader,
  Modal,
  ModalDeposit,
} from "@/components";
import styles from "./page.module.scss";
import { contractSelector } from "@/store/reducers/contract/reducer";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import useSettingsActions from "@/logic/hooks/useSettingsActions";
import { useState } from "react";
import useLoadWithdraw from "@/logic/hooks/useLoadWithdraw";

export default function Settings() {
  const { owner, admin, role, token, liquidation, hl } =
    useSelector(contractSelector);
  const { address: walletAddress } = useAccount();
  const {
    handleSetOwner,
    handleSetAdmin,
    handleBufferLimit,
    handleClaimToken,
    isLoadingOwner,
    isLoadingAdmin,
    isLoadingBuffer,
    isLoadingClaim,
    notif,
  } = useSettingsActions();

  const {
    notif: notifWithdraw,
    isLoadingWithdraw,
    handleWithdrawMoney,
  } = useLoadWithdraw();

  const [active, setActive] = useState(false);

  if (!walletAddress && role !== "Spectator") {
    return <AccessDenied type="wallet" />;
  } else if (role === "Owner" || role === "Admin" || role === "Spectator") {
    return (
      <div className={styles.wrapper}>
        <h2>Control Panel</h2>
        <div className={styles.box}>
          <h2>Owner now: {owner}</h2>
          <InputForm
            label="Address"
            placeholder="Enter New Owner"
            button="Set"
            handler={handleSetOwner}
            isLoading={isLoadingOwner}
          />
        </div>
        <div className={styles.box}>
          <h2>Admin now: {admin}</h2>

          <InputForm
            label="Address"
            placeholder="Enter New Admin"
            button="Set"
            handler={handleSetAdmin}
            isLoading={isLoadingAdmin}
          />

          <Notif active={notif}>{notif}</Notif>
        </div>
        <div className={styles.box}>
          <h2>Buffer now: {hl / 60 / 60} hours</h2>
          <InputForm
            label="Hours"
            placeholder="Enter New Hours "
            button="Set"
            handler={handleBufferLimit}
            isLoading={isLoadingBuffer}
          />
        </div>
        {token === "0x7773324bCf2fA53E4f03Ee09cCEba2A6b481B9a7" && (
          <div className={styles.box}>
            <h2>Goerli Faucet</h2>
            <InputForm
              label="Amount"
              placeholder="Enter Amount"
              button="Claim"
              handler={handleClaimToken}
              isLoading={isLoadingClaim}
            />
          </div>
        )}
        <div className={styles.payment}>
          <h3>Payment</h3>
          <div className={styles.wrap}>
            <Button className={styles.btn} onClick={() => setActive(true)}>
              Load Deposit
            </Button>
            <Modal active={active} setActive={setActive}>
              <ModalDeposit setActive={setActive} active={active} />
            </Modal>
            {isLoadingWithdraw ? (
              <Loader />
            ) : (
              <Button className={styles.btn} onClick={handleWithdrawMoney}>
                Withdraw Money
              </Button>
            )}
          </div>
          <Notif active={notifWithdraw}>{notifWithdraw}</Notif>
        </div>
        <div className={styles.liquid}>
          <h3>Liquidation</h3>
          <h4>Happened if smart contract went bankrupt, and cant pay wages</h4>
          <p>Status : {String(liquidation)}</p>
        </div>
      </div>
    );
  } else if (role === "Worker") {
    return <div>ты всего лишь работяга</div>;
  } else {
    return <AccessDenied />;
  }
}
