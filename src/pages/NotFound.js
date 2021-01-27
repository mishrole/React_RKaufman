import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/pages/NotFound.css";

import notFound from "../assets/images/not_found.svg";

function NotFound() {
  return (
    <div className="error">
      <div className="error__container container">
        <div className="error-logo">
          <img
            className="Home__Space-img img-fluid"
            src={notFound}
            alt="Logo"
          />
        </div>
        <div className="error-action">
          <Link to="/" className="btn btn-primary">
            Find my way
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
