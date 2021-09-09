import React from "react";
import "./error.scss";

export const Error = () => {
  return (
    <div className="error">
      <p className="error__text">Oh no, someone stole our cookbook!</p>

      <p className="error__text--bottom">We are trying out best to fix it...</p>
    </div>
  );
};
