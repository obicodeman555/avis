import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Icon } from "../../components";
import "./content-management.scss";
import HomeCreateModal from "./components/ctmgt-modal/CtMgtModal";
import staffIcon from "../../assets/svgs/briefcase.svg";
import userIcon from "../../assets/svgs/user-circle.svg";

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeTabHandler = (e) => {
    e.target.name === "staff-tab-button"
      ? setActiveTab(1)
      : e.target.name === "member-tab-button"
      ? setActiveTab(2)
      : setActiveTab(0);
  };
  return (
    <main className="content-management font-body">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
      <HomeCreateModal>
        <header className="home-create-modal__header">
          {activeTab !== 1 && activeTab !== 2 && (
            <>
              <h1>Create an account</h1>
              <p>Choose account type:</p>
            </>
          )}

          {activeTab === 2 && <h1>Create a member profile</h1>}
          {activeTab === 1 && <h1>Create a staff profile</h1>}
        </header>
        <div className="acct-type-tabs-block flex-container j-ct-ctr alg-itms-ctr p-7 rounded-t-lg">
          <div className="acct-type-tab-button__block flex-container dtr-flexed-clm">
            <button
              type="button"
              className={`flex-container alg-itms-ctr p-5 rounded-br-lg rounded-t-lg ${
                activeTab === 1 ? "tab-button tab-button--active" : "tab-button"
              }`}
              name="staff-tab-button"
              onClick={activeTabHandler}
            >
              <Icon imgSrc={staffIcon} />
              <div className="mr-lft-smx text-block">
                <span>Staff</span>
                <span className="text-sm fw-600">(official)</span>
              </div>
            </button>
          </div>
          <div
            className="acct-type-tab-button__block mr-lft-md flex-container dtr-flexed-clm"
            onClick={activeTabHandler}
          >
            <button
              type="button"
              name="member-tab-button"
              className={`flex-container alg-itms-ctr p-5 rounded-br-lg rounded-t-lg ${
                activeTab === 2 ? "tab-button tab-button--active" : "tab-button"
              }`}
            >
              <Icon imgSrc={userIcon} />
              <div className="mr-lft-smx text-block">
                <span>Member</span>
                <span className="text-sm fw-600">(authorised)</span>
              </div>
            </button>
          </div>
        </div>
        <div className="acct-type-tab-button__content-block rounded-br-lg p-7">
          {activeTab === 1 && (
            <div className="tab-button__content-1 h-100">
              <form className="tab-button__content-form flex-container dtr-flexed-clm h-100">
                <div className="flex-container dtr-flexed-clm">
                  <label htmlFor="staff-name">Staff Fullnames</label>
                  <input
                    type="text"
                    name=""
                    id="staff-name"
                    className="mr-top-sm p-6"
                  />
                </div>
                <div className="flex-container dtr-flexed-clm mr-top-1">
                  <label htmlFor="dept">Department</label>
                  <input
                    type="text"
                    name="dept"
                    id="dept"
                    className="mr-top-sm p-6"
                  />
                </div>
                <div className="flex-container dtr-flexed-clm mr-top-1">
                  <label htmlFor="job-status">Job Status</label>
                  <input
                    type="text"
                    name="job-status"
                    id="job-status"
                    className="mr-top-sm p-6"
                  />
                </div>
                <div className="flex-container dtr-flexed-clm mr-top-1">
                  <label htmlFor="employee_code">Employee Reg Number</label>
                  <input
                    type="text"
                    id="employee_code"
                    className="mr-top-sm p-6"
                  />
                </div>

                <div className="flex-container dtr-flexed-clm mr-top-auto">
                  <button
                    className="staff-create-button rounded-br-lg rounded-t-lg fw-600"
                    type="button"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          )}
          {activeTab === 2 && (
            <div className="tab-button__content-2 h-100">
              <form className="tab-button__content-form flex-container dtr-flexed-clm h-100">
                <div className="flex-container dtr-flexed-clm">
                  <label htmlFor="staff-name">Member Fullnames</label>
                  <input
                    type="text"
                    name=""
                    id="staff-name"
                    className="mr-top-sm p-6"
                  />
                </div>
                <div className="flex-container dtr-flexed-clm mr-top-1">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mr-top-sm p-6"
                  />
                </div>
                <div className="flex-container dtr-flexed-clm mr-top-1">
                  <label htmlFor="job-status">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="mr-top-sm p-6"
                  />
                </div>

                <div className="flex-container dtr-flexed-clm mr-top-auto">
                  <button
                    className="staff-create-button rounded-br-lg rounded-t-lg fw-600"
                    type="button"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </HomeCreateModal>
    </main>
  );
};

export default ContentManagement;
