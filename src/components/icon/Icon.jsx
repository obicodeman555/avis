import React from "react";
import "./icon.scss";

const Icon = ({ imgSrc }) => {
  return (
    <div className="icon__image-block">
      <img src={imgSrc} alt="icon" />
    </div>
  );
};

export default Icon;
