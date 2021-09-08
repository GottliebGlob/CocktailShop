import React from "react";
import CardListItem from "../CardListItem";
import styles from "./card-list.module.scss";
import PropTypes from "prop-types";

export const CardList = (props) => {
  const items = props.data.map((item) => {
    return (
      <li key={item.id}>
        <CardListItem data={item} onAdd={props.onAdd} />
      </li>
    );
  });

  return (
    <div>
      <ul className={styles.cardList}>{items}</ul>
    </div>
  );
};

CardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
