import React from "react"
import "./cart-modal.css"
import CartListItem from "../CartListItem";
import PropTypes from "prop-types";


export const CartModal = (props) => {


    const modalItems = props.data.map(item => {
        return <li key={item.id}>
            <CartListItem data={item} onRemove={props.onRemove}/>
        </li>
    })

    if(!props.show) {
        return null
    }

    return (
        <div className="cart-modal">
            <div className="cart-modal__content">
                <p className="cart-modal__title">
                    Your cart
                </p>
            <ul className="cart-items">
                {modalItems}
            </ul>
            <button className="cart-modal__goBack" onClick={() => props.onGoBack()}>
                GO BACK
            </button>
            <button className="cart-modal__submit" onClick={() => props.onSubmit()}>
                SUBMIT
            </button>
         </div>
        </div>
    )
}

CartModal.propTypes = {
    data: PropTypes.array,
    show: PropTypes.bool,
    onGoBack: PropTypes.func,
    onSubmit: PropTypes.func
}

