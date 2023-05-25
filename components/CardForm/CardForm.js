"use client";
import { useRef } from "react";
import styles from "./CardForm.module.scss";
import clsx from "clsx";

export const CardForm = ({
  label = "Company",
  placeholder = "Enter Company Name",
  button = "Connect",
  handler,
}) => {
  const nameRef = useRef();
  const onHandler = (e) => {
    e.preventDefault();
    handler(nameRef.current.value);
  };
  return (
    <form className={styles.exist} onSubmit={onHandler}>
      <div className={styles.wrap}>
        <label htmlFor="company">{label}:</label>
        <input
          ref={nameRef}
          type="text"
          name="Connect"
          id="Connect"
          placeholder={placeholder}
        />
      </div>
      <input type="submit" value={button} onClick={onHandler} />
    </form>
  );
};
