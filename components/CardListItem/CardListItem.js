import React from "react";
import styles from "./card-list-item.module.scss";
import PropTypes from "prop-types";
import Router from "next/router";

export const CardListItem = (props) => {
  const { name, category, instruction, image, id } = props.data;

  const onItemClick = (id) => {
    Router.push(`details/${id}`);
  };

  return (
    <div className={styles.cardListItem} onClick={() => onItemClick(id)}>
      <div className={styles.cardListItem__top}>
        {props.shouldAdd ? (
            <button
                onMouseDown={e => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation()
                  props.onAdd(props.data);
                }}
                className={styles.delete}
            >
              Add
            </button>
        ) : null}
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
