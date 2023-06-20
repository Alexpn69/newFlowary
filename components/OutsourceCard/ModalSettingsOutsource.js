import styles from "./OutsourceCard.module.scss";
import { Button, Loader, Notif } from "@/components";
import useOutsourceActions from "@/logic/hooks/useOutsourceActions";
import { contractSelector } from "@/store/reducers/contract/reducer";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

export const ModalSettingsOutsource = ({
  id,
  status,
  setActive,
  who,
  wage,
  startDate,
  deadline,
  activeStream,
  symbolToken,
}) => {
  const { isLoading, notif, handleClaim, handleFinishJob } =
    useOutsourceActions(id, setActive);
  const { role } = useSelector(contractSelector);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapinfo}>
      <p>Outsourcer: {who}</p>
      <p>
        Earn: {wage} {symbolToken}
      </p>
      <p>Start date: {dayjs.unix(startDate).format("HH:mm DD/MM/YYYY")}</p>
      <p>Finish date: {dayjs.unix(deadline).format("HH:mm DD/MM/YYYY")}</p>

      {status === 2 ? (
        <Button
          onClick={handleFinishJob}
          disabled={role !== "Owner" || role !== "Admin"}
          loader={isLoading}
          type="main"
        >
          Finish job
        </Button>
      ) : (
        <Button
          onClick={handleClaim}
          disabled={role !== "Worker"}
          loader={isLoading}
          type="main"
        >
          Claim for reward
        </Button>
      )}

      <Notif active={notif}>{notif}</Notif>
    </div>
  );
};
