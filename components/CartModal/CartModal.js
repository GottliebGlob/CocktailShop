import React, { useEffect, useRef } from "react";
import styles from "./cart-modal.module.scss";
import CartListItem from "../CartListItem";
import PropTypes from "prop-types";

export const CartModal = (props) => {
  const modalRef = useRef(null);

  const toggleModalVisible = () => {
    const modalElement = modalRef.current;
    modalElement.classList.toggle(`${styles.cartModalShow}`);
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
    <div className={styles.cartModal} ref={modalRef}>
      <div className={styles.cartModal__content}>
        <p className={styles.cartModal__title}>Your cart</p>
        <ul className={styles.cartItems}>{modalItems}</ul>
        <button
          className={styles.cartModal__goBack}
          onClick={() => goBackButtonHandler()}
        >
          GO BACK
        </button>
        <button
            className={styles.cartModal__submit}
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
