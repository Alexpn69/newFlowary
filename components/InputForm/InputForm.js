"use client";
import { useRef, useState } from "react";
import styles from "./InputForm.module.scss";
import { Loader, Notif } from "@/components";

export const InputForm = ({
  label = "",
  placeholder = "",
  button = "",
  handler,
  isLoading,
}) => {
  const nameRef = useRef();
  const [notifLocal, setNotifLocal] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    setNotifLocal("");
    if (nameRef.current.value !== "") {
      handler && handler(nameRef.current.value);
      nameRef.current.value = "";
    } else {
      setNotifLocal("Enter something!");
      setTimeout(() => setNotif(""), 5000);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <form className={styles.exist} onSubmit={onFormSubmit}>
          <div className={styles.wrap}>
            <label htmlFor="company">{label}:</label>
            <input
              ref={nameRef}
              type="text"
              name={label}
              id={label}
              placeholder={placeholder}
            />
          </div>
          <input type="submit" value={button} />
          <Notif active={notifLocal}>{notifLocal}</Notif>
        </form>
      )}
    </>
  );
};
