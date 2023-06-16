import { InputForm, Notif } from "@/components";
import useLoadWithdraw from "@/logic/hooks/useLoadWithdraw";

export const ModalDeposit = ({ setActive }) => {
  const { notif, isLoadingDeposit, handleLoadMoney } =
    useLoadWithdraw(setActive);
  const handler = (money) => {
    handleLoadMoney(money, setActive);
  };
  return (
    <>
      <InputForm
        label="Amount"
        placeholder="Enter Amount"
        button="Load deposit"
        handler={handleLoadMoney}
        isLoading={isLoadingDeposit}
      />

      <Notif active={notif}>{notif}</Notif>
    </>
  );
};
