import { Modal } from "@/components/Modal/Modal";
import useDeleteEmployee from "@/logic/hooks/useDeleteEmployee";
import usePrepareCompanyContract from "@/logic/hooks/usePrepareCompanyContract";
import useRateChange from "@/logic/hooks/useRateChange";
import {
  contractSelector,
  setAmountEmployee,
  setArrEmployee,
} from "@/store/reducers/contract/reducer";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const ModalSettingsUser = ({ active, setActive, who }) => {
  const newRateRef = useRef();
  const dispatch = useDispatch();
  const { decimalsToken } = useSelector(contractSelector);
  const { contractCompany, signedCompanyContract } =
    usePrepareCompanyContract();
  const { isLoading, error, handleRateChange } = useRateChange(
    signedCompanyContract,
    newRateRef,
    who,
    contractCompany,
    decimalsToken,
    dispatch,
    setArrEmployee,
    setActive
  );
  const { isLoadingDel, errorDel, handleDelete } = useDeleteEmployee(
    signedCompanyContract,
    contractCompany,
    who,
    decimalsToken,
    dispatch,
    setAmountEmployee,
    setArrEmployee,
    setActive
  );

  return (
    <>
      <Modal active={active} setActive={setActive}>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <form onSubmit={handleRateChange}>
              <input
                ref={newRateRef}
                type="number"
                name="Set new rate"
                id="Set new rate"
                placeholder="Enter new value of rate per hour"
                min="0"
              />
              <button>Change</button>
            </form>
            {error && (
              <h1 style={{ color: "red", fontWeight: "bold" }}>{error}</h1>
            )}
          </>
        )}
        <br />
        {isLoadingDel ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <div>
              <button onClick={handleDelete}>Delete</button>
            </div>
            {errorDel && (
              <h1 style={{ color: "red", fontWeight: "bold" }}>{error}</h1>
            )}
          </>
        )}
      </Modal>
    </>
  );
};

export default ModalSettingsUser;
