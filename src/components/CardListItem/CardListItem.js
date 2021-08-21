import React from "react";
import './card-list-item.css'

export const CardListItem = (props) => {

    const {name, category, instruction, image} = props.data

    return (
        <div className="card-list-item">
            <div className="card-list-item__top">
                <button onClick={() => {props.onAdd(props.id)}} className="delete">
                    Add
                </button>
                <img src={image} className="item-logo" alt="A cocktail should be there..."/>
                <div className="card-list-item__top--text">
                    <p className="card-list-item--name"> {name} </p>
                    <p className="card-list-item--cat"> {category} </p>
                </div>

            </div>
            <p className="card-list-item--instruction">
                {instruction}
            </p>
        </div>
    )
}
