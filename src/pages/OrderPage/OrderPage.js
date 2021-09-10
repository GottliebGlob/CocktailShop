import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import "./OrderPage.scss";
import HeaderLayout from "../../components/HeaderLayout";
import { Link } from "react-router-dom";
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
      <div className="order-container">
        <form onSubmit={handleSubmit} className="order-form">
          <div className="order-input-container">
            <label htmlFor="phone">Укажите номер телефона</label>
            <input type="phone" id="number" {...phoneField} />
          </div>
          <div className="order-input-container">
            <label htmlFor="address">Укажите адрес доставки</label>
            <input type="address" id="address" {...addressField} />
          </div>
          <div className="order-input-container">
            <label htmlFor="name">Укажите ваше Имя</label>
            <input type="name" id="name" {...nameField} />
          </div>
          <input
            className="order-submit"
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
