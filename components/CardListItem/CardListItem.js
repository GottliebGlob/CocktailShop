import React from "react";
import styles from "./card-list-item.module.scss";
import PropTypes from "prop-types";

export const CardListItem = (props) => {
  const { name, category, instruction, image, id } = props.data;

  return (
    <div className={styles.cardListItem}>
      <div className={styles.cardListItem__top}>
        <button
          onClick={() => {
            props.onAdd(props.data);
          }}
          className={styles.delete}
        >
          Add
        </button>
        <img
          src={image}
          className={styles.itemLogo}
          alt="A cocktail should be there..."
        />
        <div className={styles.cardListItem__topText}>
          <p className={styles.cardListItemName}> {name} </p>
          <p className={styles.cardListItemCat}> {category} </p>
        </div>
      </div>
      <p className={styles.cardListItemInstruction}>{instruction}</p>
    </div>
  );
};

CardListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    instruction: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
