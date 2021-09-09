import React from "react";
import PropTypes from "prop-types";
import "./HeaderLayout.scss";
import logo from "./logo.svg";

export const HeaderLayout = (props) => {
  return (
    <div className="App-header">
      <div className="logo">
        <img src={logo} alt="Something went wrong!" className="logo" />
      </div>
      {props.children}
    </div>
  );
};

HeaderLayout.propTypes = {
  children: PropTypes.element,
};
