"use client";
import { Loader, Notif } from "@/components";
import useAddEmployee from "@/logic/hooks/useAddEmployee";
import { useRef } from "react";

export const ModalAddNewUser = ({ setActive }) => {
  const rateRef = useRef();
  const addressUserRef = useRef();

  const { handleNewUser, isLoading, notif, setNotif } = useAddEmployee(
    setActive,
    addressUserRef,
    rateRef
  );

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (addressUserRef.current.value !== "" && rateRef.current.value !== "") {
      handleNewUser();
      addressUserRef.current.value = "";
      rateRef.current.value = "";
    } else {
      setNotif("Enter something!");
      setTimeout(() => setNotif(""), 5000);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={onFormSubmit}>
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
          <input type="submit" value="submit" />
          <Notif active={notif}>{notif}</Notif>
        </form>
      )}
    </>
  );
};
