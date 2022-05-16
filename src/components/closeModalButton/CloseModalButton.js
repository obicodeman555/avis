import React from "react";
import "./close-modal-button.scss";

const CloseModalButton = ({ onClick }) => {
  return (
    <div className="avis-closeButton__block flex-container">
      <button type="button" onClick={onClick}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9625 14L26.7805 6.18203C27.7398 5.22266 27.7398 3.66719 26.7805 2.70703L25.043 0.969531C24.0836 0.0101563 22.5281 0.0101563 21.568 0.969531L13.75 8.7875L5.93203 0.969531C4.97266 0.0101563 3.41719 0.0101563 2.45703 0.969531L0.719531 2.70703C-0.239844 3.66641 -0.239844 5.22187 0.719531 6.18203L8.5375 14L0.719531 21.818C-0.239844 22.7773 -0.239844 24.3328 0.719531 25.293L2.45703 27.0305C3.41641 27.9898 4.97266 27.9898 5.93203 27.0305L13.75 19.2125L21.568 27.0305C22.5273 27.9898 24.0836 27.9898 25.043 27.0305L26.7805 25.293C27.7398 24.3336 27.7398 22.7781 26.7805 21.818L18.9625 14Z"
            fill="#F2BD57"
          />
        </svg>
      </button>
    </div>
  );
};

export default CloseModalButton;
