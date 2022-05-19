import React, { useRef } from "react";

import { addStaff } from "../../../../lib/api";
import useHttp from "../../../../hooks/useHttp";
const CreateStaffForm = ({ showNotify, setShowNotify }) => {
  const staffFullnameRef = useRef(null);
  const staffDepartmentRef = useRef(null);
  const staffJobTileRef = useRef(null);
  const staffRegNumberRef = useRef(null);
  const { sendRequest, status } = useHttp(addStaff);
  //add a staff submit handler
  const addStaffSubmitHandler = (e) => {
    e.preventDefault();
    const staffData = {
      fullName: staffFullnameRef.current.value,
      department: staffDepartmentRef.current.value,
      jobTitle: staffJobTileRef.current.value,
      regNumber: staffRegNumberRef.current.value,
    };

    sendRequest(staffData);
    setShowNotify(!showNotify);

    staffFullnameRef.current.value = "";
    staffDepartmentRef.current.value = "";
    staffJobTileRef.current.value = "";
    staffRegNumberRef.current.value = "";
  };

  return (
    <form
      onSubmit={addStaffSubmitHandler}
      className="tab-button__content-form flex-container dtr-flexed-clm h-100"
    >
      <div className="flex-container dtr-flexed-clm">
        <label htmlFor="staff-name">Staff Fullname</label>
        <input
          type="text"
          name=""
          id="staff-name"
          className="mr-top-sm p-6"
          ref={staffFullnameRef}
        />
      </div>
      <div className="flex-container dtr-flexed-clm mr-top-1">
        <label htmlFor="dept">Department</label>
        <input
          type="text"
          name="dept"
          id="dept"
          className="mr-top-sm p-6"
          ref={staffDepartmentRef}
        />
      </div>
      <div className="flex-container dtr-flexed-clm mr-top-1">
        <label htmlFor="job-title">Job Title</label>
        <input
          type="text"
          name="job-title"
          id="job-title"
          className="mr-top-sm p-6"
          ref={staffJobTileRef}
        />
      </div>
      <div className="flex-container dtr-flexed-clm mr-top-1">
        <label htmlFor="employee_code">Staff Reg Number</label>
        <input
          type="text"
          id="employee_code"
          className="mr-top-sm p-6"
          ref={staffRegNumberRef}
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
  );
};

export default CreateStaffForm;
