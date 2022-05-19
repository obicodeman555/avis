import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Icon, Notify } from "../../components";
import "./content-management.scss";
import HomeCreateModal from "./components/ctmgt-modal/CtMgtModal";
import staffIcon from "../../assets/svgs/briefcase.svg";
import userIcon from "../../assets/svgs/user-circle.svg";
import useHttp from "../../hooks/useHttp";
import { getAllMembers, getAllStaffs, getAllVehicles } from "../../lib/api";
import CreateMemberForm from "./components/create-member-form/CreateMemberForm";
import CreateStaffForm from "./components/create-staff-form/CreateStaffForm";

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showNotify, setShowNotify] = useState(false);

  const {
    sendRequest: membersRequest,
    status,
    data: members,
    error,
  } = useHttp(getAllMembers, true);
  const {
    sendRequest: staffsRequest,

    data: staffs,
  } = useHttp(getAllStaffs, true);

  const { sendRequest: officialVehiclesRequest, data: officialVehicles } =
    useHttp(getAllVehicles, true);

  useEffect(() => {
    membersRequest();
    staffsRequest();
    officialVehiclesRequest();
  }, [membersRequest, staffsRequest, officialVehiclesRequest]);

  useEffect(() => {
    //remove notification
    setTimeout(() => {
      setShowNotify(false);
    }, 5000);
  }, [showNotify]);

  const activeTabHandler = (e) => {
    e.target.name === "staff-tab-button"
      ? setActiveTab(1)
      : e.target.name === "member-tab-button"
      ? setActiveTab(2)
      : setActiveTab(0);
  };
  return (
    <main className="content-management font-body">
      <Notify
        showNotify={showNotify}
        notifyMsg="Information has been sucessfully added"
        notifyStatus="Success"
      />
      <Sidebar />
      <div className="content">
        <Outlet
          context={{ status, members, error, staffs, officialVehicles }}
        />
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
              <CreateStaffForm
                showNotify={showNotify}
                setShowNotify={setShowNotify}
              />
            </div>
          )}
          {activeTab === 2 && (
            <div className="tab-button__content-2 h-100">
              <CreateMemberForm
                showNotify={showNotify}
                setShowNotify={setShowNotify}
              />
            </div>
          )}
        </div>
      </HomeCreateModal>
    </main>
  );
};

export default ContentManagement;
