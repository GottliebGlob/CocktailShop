import React from "react";
import "./LuckyButton.css"

export const LuckyButton = (props) => {

    return (
        <div className="lucky-button__wrapper">
            <button onClick={() => props.onLuckyButtonClick()} className="lucky-button__button">
                I've got lucky!
            </button>
        </div>
    )
}
