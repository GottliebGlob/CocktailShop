import React from "react";
import CardListItem from "../CardListItem";
import "./card-list.css"

export const CardList = (props) => {

    const items = props.data.map((item) => {
        const { id, ...rest} = item

        return (
            <li key={id}>
             <CardListItem data={rest} id={id} onAdd={props.onAdd}/>
            </li>
        )
    })

    return (
        <div className="container">
        <ul className="card-list">
            {items}
        </ul>
        </div>
    )
}
