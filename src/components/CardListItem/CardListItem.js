import React from "react";
import "./card-list-item.scss";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export const CardListItem = (props) => {
  const history = useHistory();
  const { name, category, instruction, image, id } = props.data;

  const onItemClick = (id) => {
    history.push(`/${id}`);
  };

  return (
    <div className="card-list-item" onClick={() => onItemClick(id)}>
      <div className="card-list-item__top">
        {props.shouldAdd ? (
          <button
            onClick={() => {
              props.onAdd(props.data);
            }}
            className="delete"
          >
            Add
          </button>
        ) : null}

        <img
          src={image}
          className="item-logo"
          alt="A cocktail should be there..."
        />
        <div className="card-list-item__top--text">
          <p className="card-list-item--name"> {name} </p>
          <p className="card-list-item--cat"> {category} </p>
        </div>
      </div>
      <p className="card-list-item--instruction">{instruction}</p>
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
