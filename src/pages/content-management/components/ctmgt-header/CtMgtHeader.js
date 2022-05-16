import React from "react";
import { Link } from "react-router-dom";
import "./ctmgt-header.scss";
import bellIcon from "../../../../assets/svgs/bell.svg";
import refreshIcon from "../../../../assets/svgs/refresh.svg";
import squareAddIcon from "../../../../assets/svgs/square-add.svg";
import { Icon } from "../../../../components";
import { useModalContext } from "../../../../context/modal_context";

const CtMgtHeader = ({ headerTitle, text }) => {
  const { showCreateAccountModalHandler } = useModalContext();
  return (
    <header className="content-management__header flex-container dtr-flexed-clm">
      <div className="content-management__header__upper-content flex-container alg-itms-ctr">
        <div className="text-block">
          <h1>{headerTitle}</h1>
          <p className="mr-top-1">{text}</p>
        </div>
        <Link to="#" className="mr-lft-auto ">
          <Icon imgSrc={bellIcon} />
        </Link>
      </div>

      <div className="content-management__header__lower-content flex-container">
        <Link to="">
          <Icon imgSrc={refreshIcon} />
        </Link>
        <div className="createButton-with-dropdown mr-lft-auto flex-container">
          <button
            type="button"
            className="flex-container alg-itms-ctr p-5 rounded-br-lg rounded-t-lg"
            onClick={showCreateAccountModalHandler}
          >
            <Icon imgSrc={squareAddIcon} />
            <span className="mr-lft-smx fw-600 text-md">Create New</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default CtMgtHeader;
