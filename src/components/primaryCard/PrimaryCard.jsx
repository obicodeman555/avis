import React from "react";
import "./primary-card.scss";

const PrimaryCard = (props) => {
  return (
    <div
      className={`avis__primaryCard ${props.customClassName}`}
      id={props.customIdName}
    >
      <header className="avis__primaryCard__header">
        <div className="loginAccess__introText">{props.cardHeaderText}</div>
        <div className="avis__primaryCard__removeIcon">
          <button>
            <svg
              width="15"
              height="15"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 9C0 8.66848 0.131696 8.35054 0.366117 8.11612C0.600537 7.8817 0.918479 7.75 1.25 7.75H15.7325L10.365 2.385C10.1303 2.15028 9.99842 1.83194 9.99842 1.5C9.99842 1.16806 10.1303 0.849717 10.365 0.615C10.5997 0.380283 10.9181 0.248421 11.25 0.248421C11.5819 0.248421 11.9003 0.380283 12.135 0.615L19.635 8.115C19.7514 8.23111 19.8438 8.36905 19.9068 8.52092C19.9698 8.67278 20.0022 8.83558 20.0022 9C20.0022 9.16442 19.9698 9.32722 19.9068 9.47908C19.8438 9.63095 19.7514 9.76889 19.635 9.885L12.135 17.385C11.9003 17.6197 11.5819 17.7516 11.25 17.7516C10.9181 17.7516 10.5997 17.6197 10.365 17.385C10.1303 17.1503 9.99842 16.8319 9.99842 16.5C9.99842 16.1681 10.1303 15.8497 10.365 15.615L15.7325 10.25H1.25C0.918479 10.25 0.600537 10.1183 0.366117 9.88388C0.131696 9.64946 0 9.33152 0 9Z"
                fill="#f2bd57"
              />
            </svg>
          </button>
        </div>
      </header>
      <div className="avis__primaryCard__body">{props.children}</div>
    </div>
  );
};

export default PrimaryCard;
