import React from "react";
import PropTypes from "prop-types";
import Image from "next/image"
import mainIcon from "../../public/main-icon.png"
import styles from "./HeaderLayout.module.scss"


export const HeaderLayout = (props) => {
  return (
    <div className={styles.AppHeader}>
      <div className={styles.logo}>
          <Image src={mainIcon} alt="Cocktail picture..." className={styles.logo}/>
      </div>
      {props.children}
    </div>
  );
};

HeaderLayout.propTypes = {
  children: PropTypes.element,
};
