import React from "react";
import { Link } from "react-router-dom";
import "./AsideHeader.scss";

export const AsideHeader = () => {
  return (
    <div>
      <Link to="/" className="go-back-link">
        GO BACK
      </Link>
    </div>
  );
};
