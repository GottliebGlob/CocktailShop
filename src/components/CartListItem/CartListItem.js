import React from "react";
import './cart-list-item.css'
import PropTypes from "prop-types";
import {CardListItem} from "../CardListItem/CardListItem";

export const CartListItem = (props) => {

    const {name, image} = props.data

    return (
        <div className="cart-list-item">
                <img src={image} className="cart-list-item__logo" alt="A cocktail should be there..."/>
                    <p className="cart-list-item__name"> {name} </p>

        </div>
    )
}

CardListItem.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string
    }).isRequired
}
