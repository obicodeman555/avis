import React from "react";
import "./avis-primary-button.scss";

const AvisPrimaryButton = ({
  buttonText,
  onClick,
  buttonType,
  customButtonClass,
}) => {
  return (
    <div className={`avis__primaryButton__wrapper ${customButtonClass}`}>
      <button
        className="avis__primaryButton"
        onClick={onClick}
        type={buttonType}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default AvisPrimaryButton;
