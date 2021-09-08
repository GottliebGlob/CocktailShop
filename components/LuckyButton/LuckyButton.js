import React from "react";
import styles from "./LuckyButton.module.scss";
import PropTypes from "prop-types";

export const LuckyButton = (props) => {
  return (
    <div className={styles.luckyButton__wrapper}>
      <button
        onClick={() => props.onLuckyButtonClick()}
        className={styles.luckyButton__button}
      >
        I am lucky!
      </button>
    </div>
  );
};

LuckyButton.propTypes = {
  onLuckyButtonClick: PropTypes.func,
};
