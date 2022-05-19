import React, { useRef } from "react";
// import { Notify } from "../../../../components";
import { useNavigate } from "react-router-dom";
import useHttp from "../../../../hooks/useHttp";
import { addMember } from "../../../../lib/api";

const CreateMemberForm = ({ showNotify, setShowNotify }) => {
  const { sendRequest, status } = useHttp(addMember);
  const navigate = useNavigate();
  const memberFullnameRef = useRef(null);
  const memberEmailAddressRef = useRef(null);
  const generatedPasswordRef = useRef(null);
  const memberJobTitleRef = useRef(null);

  //add member / authorised user
  const addMemberSubmitHandler = (e) => {
    e.preventDefault();
    const memberData = {
      fullName: memberFullnameRef.current.value,
      emailAddress: memberEmailAddressRef.current.value,
      jobTitle: memberJobTitleRef.current.value,
      generatedPassword: generatedPasswordRef.current.value,
    };

    //post data
    sendRequest(memberData);
    //show sucess notificatiion
    setShowNotify(!showNotify);
    //clear input fields
    memberFullnameRef.current.value = "";
    memberEmailAddressRef.current.value = "";
    generatedPasswordRef.current.value = "";
    memberJobTitleRef.current.value = "";

    navigate("/content-management/member");
  };

  return (
    <>
      <form
        onSubmit={addMemberSubmitHandler}
        className="tab-button__content-form flex-container dtr-flexed-clm h-100"
      >
        <div className="flex-container dtr-flexed-clm">
          <label htmlFor="staff-name">Member Fullname</label>
          <input
            type="text"
            name=""
            id="staff-name"
            className="mr-top-sm p-6"
            ref={memberFullnameRef}
          />
        </div>
        <div className="flex-container dtr-flexed-clm mr-top-1">
          <label htmlFor="job-title">Job Title</label>
          <input
            type="text"
            name=""
            id="job-title"
            className="mr-top-sm p-6"
            ref={memberJobTitleRef}
          />
        </div>
        <div className="flex-container dtr-flexed-clm mr-top-1">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="mr-top-sm p-6"
            ref={memberEmailAddressRef}
          />
        </div>
        <div className="flex-container dtr-flexed-clm mr-top-1">
          <label htmlFor="job-status">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="mr-top-sm p-6"
            ref={generatedPasswordRef}
          />
        </div>

        <div className="flex-container dtr-flexed-clm mr-top-auto">
          <button
            className="staff-create-button rounded-br-lg rounded-t-lg fw-600"
            type="submit"
          >
            {status === "pending" ? <span>Processing...</span> : "Register"}
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateMemberForm;
