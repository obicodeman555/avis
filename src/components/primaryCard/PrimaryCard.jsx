import React from "react";
import "./primary-card.scss";

const PrimaryCard = (props) => {
  return (
    <div
      className={`avis__primaryCard ${props.customClassName}`}
      id={props.customIdName}
    >
      <div className="loginAccess__introText">{props.cardHeaderText}</div>

      <div className="avis__primaryCard__body">{props.children}</div>
    </div>
  );
};

export default PrimaryCard;
