import { contractSelector } from "@/store/reducers/contract/reducer";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import WageDynamic from "../OutsourceCard/wageDynamic";

export const OutsourceWorkerCard = () => {
  const { arrOutsource } = useSelector(contractSelector);
  const { address: walletAddress } = useAccount();

  let employee;
  if (walletAddress) {
    employee = arrOutsource.find(
      (outsource) => outsource.who === walletAddress
    );
  }
  const activeStream = employee?.deadline > dayjs().unix();

  console.log("employee");

  return (
    <>
      {employee ? (
        <>
          <div>Your address:{employee.who}</div>
          <div>Your rate: {employee.taskName}</div>
        </>
      ) : (
        <div>You dont have active tasks</div>
      )}
      {activeStream && (
        <div>
          Counter:
          <WageDynamic
            wage={employee.wage}
            startDate={employee.startDate}
            deadline={employee.deadline}
          />
        </div>
      )}
    </>
  );
};
