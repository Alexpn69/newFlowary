import { Modal } from "@/components/Modal/Modal";
import useAddEmployee from "@/logic/hooks/useAddEmployee";

const ModalAddNewUser = ({ active, setActive }) => {
  const { isLoading, handleNewUser, addressUserRef, rateRef } =
    useAddEmployee(setActive);
  return (
    <>
      <Modal active={active} setActive={setActive}>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            {" "}
            <form onSubmit={handleNewUser}>
              <input
                ref={addressUserRef}
                type="string"
                name="Set users address"
                id="Set users address"
                placeholder="Enter address of new employee"
              />
              <input
                ref={rateRef}
                type="number"
                name="Set rate"
                id="Set new rate"
                placeholder="Enter value of rate per hour"
                min="0"
              />
              <button>Add new employee</button>
            </form>
          </>
        )}
      </Modal>
    </>
  );
};

export default ModalAddNewUser;
