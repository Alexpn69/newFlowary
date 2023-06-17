import useStartStopStream from "@/logic/hooks/useStartStopStream";
import { contractSelector } from "@/store/reducers/contract/reducer";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";
import { Notif } from "../Notif/Notif";

export const EmploeeCard = () => {
  const { address: walletAddress } = useAccount();
  const { arrEmployee } = useSelector(contractSelector);

  const {
    isLoading,
    notif,
    isLoadingBalance,
    isActive,
    amountOfStream,
    handleWithdrawMoneyEmployee,
  } = useStartStopStream(walletAddress);
  const employee = walletAddress
    ? arrEmployee.find((employee) => employee.who === walletAddress)
    : undefined;

  return (
    <>
      {employee ? (
        <>
          <div>Your address:{employee.who}</div>
          <div>Your rate: {employee.rate}</div>
        </>
      ) : (
        <div>You dont have active tasks</div>
      )}

      {isActive && (
        <>
          <div>{isLoadingBalance ? <Loader /> : amountOfStream.toFixed(5)}</div>
          <br />
          <div>
            {isLoading ? (
              <Loader />
            ) : (
              <Button onClick={handleWithdrawMoneyEmployee}>
                Withdraw money
              </Button>
            )}
          </div>
          <Notif active={notif}>{notif}</Notif>
        </>
      )}
    </>
  );
};
