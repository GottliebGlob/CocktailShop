import React from "react";
import CardListItem from "../CardListItem";
import "./card-list.scss";
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
    <div className="container">
      <ul className="card-list">{items}</ul>
    </div>
  );
};

CardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
