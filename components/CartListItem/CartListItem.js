import React from "react";
import styles from "./cart-list-item.module.scss";
import PropTypes from "prop-types";
import { CardListItem } from "../CardListItem/CardListItem";

export const CartListItem = (props) => {
  const { name, image } = props.data;

  return (
    <div className={styles.cartListItem}>
      <img
        src={image}
        className={styles.cartListItem__logo}
        alt="A cocktail should be there..."
      />
      <p className={styles.cartListItem__name}> {name} </p>
    </div>
  );
};

CardListItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
