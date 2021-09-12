import React from "react";
import styles from "./AsideHeader.module.scss"
import Link from 'next/link'

export const AsideHeader = () => {
  return (
    <div>
      <Link href="/" >
       <a className={styles.goBackLink}>GO BACK</a>
      </Link>
    </div>
  );
};
