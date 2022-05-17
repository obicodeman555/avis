import React from "react";
import deleteIcon from "../../../../assets/svgs/delete-forever.svg";
import CtMgtHeader from "../ctmgt-header/CtMgtHeader";
import "./member.scss";

const Member = () => {
  return (
    <>
      <CtMgtHeader
        headerTitle="Authorised Members"
        text="Good afternoon, wash your hands &#128079;"
      />
      <div className="data-info__content mr-top-4">
        <div className="data-info__content-title mr-btm-2">
          Verified &amp; Authorised Members
        </div>
        <article className="data-info__custom-table">
          <div className="table-header p-6">
            <div className="table-row flex-container">
              <span>Member Fullname</span>
              <span>Email Address</span>
              <span>Generated Password</span>
              <span>Member Department/Office</span>
              <span>Actions</span>
            </div>
          </div>
          <div className="table-body p-6">
            <div className="table-row flex-container">
              <span>Timothy Tunde</span>
              <span>tmonty@yahoo.com</span>
              <span>ght56678</span>
              <span>Chief Security Officer</span>
              <span className="flex-container j-ct-ctr">
                <span>
                  <img src={deleteIcon} alt="" />
                </span>
              </span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Member;
