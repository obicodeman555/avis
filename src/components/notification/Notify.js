import React from "react";
import "./notify.scss";
import successIcon from "../../assets/svgs/success.svg";
import warningIcon from "../../assets/svgs/warning.svg";

const Notify = (props) => {
  return (
    <div
      className={`${
        props.showNotify ? "notification activate--notify" : "notification"
      }`}
    >
      <div className="notification__content flex-container alg-itms-ctr ">
        {props.notifyStatus.toLowerCase() === "success" && (
          <span>
            <img src={successIcon} alt="success Icon" />
          </span>
        )}

        {props.notifyStatus.toLowerCase() === "warning" && (
          <span>
            <img src={warningIcon} alt="warning Icon" />
          </span>
        )}
        <span className="flex-container dtr-flexed-clm">
          <span>{props.notifyStatus}</span>
          <span>{props.notifyMsg}</span>
        </span>
      </div>
    </div>
  );
};

export default Notify;
