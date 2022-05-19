import React from "react";
import deleteIcon from "../../../../assets/svgs/delete-forever.svg";
import CtMgtHeader from "../ctmgt-header/CtMgtHeader";
import { useOutletContext } from "react-router-dom";

import "./member.scss";

const Member = () => {
  const { status, members, error } = useOutletContext();

  //handle pending status
  if (status === "pending") {
    return <div>Processing...</div>;
  }

  //handle error error
  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && (!members || members.length === 0)) {
    return (
      <div className="data-info__content mr-top-4">
        <div className="data-info__content-title mr-btm-2">
          Verified &amp; Authorised Members
        </div>
        <article>
          <h1>We are finding data be patient...</h1>
        </article>
      </div>
    );
  }
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
            {members.map((member) => {
              // console.dir(member);
              return (
                <div
                  className="table-row flex-container alg-itms-ctr p-6"
                  key={member.id}
                >
                  <span>{member.fullName}</span>
                  <span>{member.emailAddress}</span>
                  <span>{member.generatedPassword}</span>
                  <span>{member.jobTitle}</span>
                  <span className="flex-container j-ct-ctr">
                    <span>
                      <img src={deleteIcon} alt="delete icon" />
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </>
  );
};

export default Member;
