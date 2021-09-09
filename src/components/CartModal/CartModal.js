import React, { useEffect, useRef } from "react";
import "./cart-modal.scss";
import CartListItem from "../CartListItem";
import PropTypes from "prop-types";

export const CartModal = (props) => {
  const modalRef = useRef(null);

  const toggleModalVisible = () => {
    const modalElement = modalRef.current;
    modalElement.classList.toggle("cart-modal--show");
  };

  const submitButtonHandler = () => {
    toggleModalVisible();
    props.onSubmit();
  };

  const goBackButtonHandler = () => {
    toggleModalVisible();
    props.onGoBack();
  };

  useEffect(() => {
    if (props.show) {
      toggleModalVisible();
    }
  }, [props.show]);

  const modalItems = props.data.map((item) => {
    return (
      <li key={item.id}>
        <CartListItem data={item} onRemove={props.onRemove} />
      </li>
    );
  });

  return (
    <div className="cart-modal" ref={modalRef}>
      <div className="cart-modal__content">
        <p className="cart-modal__title">Your cart</p>
        <ul className="cart-items">{modalItems}</ul>
        <button
          className="cart-modal__goBack"
          onClick={() => goBackButtonHandler()}
        >
          GO BACK
        </button>
        <button
          className="cart-modal__submit"
          onClick={() => submitButtonHandler()}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

CartModal.propTypes = {
  data: PropTypes.array,
  show: PropTypes.bool,
  onGoBack: PropTypes.func,
  onSubmit: PropTypes.func,
};
