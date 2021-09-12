import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./OrderPage.module.scss";
import HeaderLayout from "../../components/HeaderLayout";
import AsideHeader from "../../components/AsideHeader";

const useFormField = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => setValue(e.target.value), []);
  return { value, onChange };
};

export const OrderPage = (props) => {
  const nameField = useFormField();
  const phoneField = useFormField();
  const addressField = useFormField();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <HeaderLayout>
        <AsideHeader />
      </HeaderLayout>
      <div className={styles.orderContainer}>
        <form onSubmit={handleSubmit} className={styles.orderForm}>
          <div className={styles.orderInputContainer}>
            <label htmlFor="phone">Укажите номер телефона</label>
            <input type="phone" id="number" {...phoneField} />
          </div>
          <div className={styles.orderInputContainer}>
            <label htmlFor="address">Укажите адрес доставки</label>
            <input type="address" id="address" {...addressField} />
          </div>
          <div className={styles.orderInputContainer}>
            <label htmlFor="name">Укажите ваше Имя</label>
            <input type="name" id="name" {...nameField} />
          </div>
          <input
            className={styles.orderSubmit}
            type="submit"
            value="Сделать заказ!"
          />
        </form>
      </div>
    </div>
  );
};

OrderPage.propTypes = {
  data: PropTypes.array,
};


