import React from "react";
import "./avis-primary-button.scss";

const AvisPrimaryButton = ({ buttonText }) => {
  return (
    <div className="avis__primaryButton__wrapper">
      <button className="avis__primaryButton">{buttonText}</button>
    </div>
  );
};

export default AvisPrimaryButton;
