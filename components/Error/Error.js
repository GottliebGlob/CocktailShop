import React from "react";
import styles from "./error.module.scss";

export const Error = () => {
  return (
    <div className={styles.error}>
      <p className={styles.error__text}>Oh no, someone stole our cookbook!</p>

      <p className={styles.error__textBottom}>We are trying out best to fix it...</p>
    </div>
  );
};
