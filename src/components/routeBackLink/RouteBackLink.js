import React from "react";
import leftArrow from "../../assets/images/left_arrow.png";
import { Link } from "react-router-dom";
import "./route-back-link.scss";

const RouteBackLink = ({ linkTo }) => {
  return (
    <div className="route-back">
      <span className="route-back__img-block">
        <img src={leftArrow} alt="route back indicator" />
      </span>
      <span className="route-back__text">
        <Link to={linkTo}>Go back home</Link>
      </span>
    </div>
  );
};

export default RouteBackLink;
