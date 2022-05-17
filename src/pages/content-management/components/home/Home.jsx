import React from "react";
import "./home.scss";
import CtMgtHeader from "../ctmgt-header/CtMgtHeader";
import deleteIcon from "../../../../assets/svgs/delete-forever.svg";
import checkmarkIcon from "../../../../assets/svgs/checkmark.svg";

const Home = () => {
  return (
    <section className="content-management-home">
      <CtMgtHeader
        headerTitle="Super admin"
        text="Good afternoon, wash your hands &#128079;"
      />
      <main>
        <div className="data-info flex-container mr-top-4 j-ct-spc-ely">
          <div className="flex-container dtr-flexed-clm p-7">
            <span className="fw-600 data-info-title">
              Total Official Vehicles
            </span>
            <span className="mr-top-1 fw-700 data-info-count">2100</span>
          </div>
          <div className="flex-container dtr-flexed-clm p-7">
            <span className="fw-600 data-info-title">
              Total Authorised Users
            </span>
            <span className="mr-top-1 fw-700 data-info-count">2100</span>
          </div>
          <div className="flex-container dtr-flexed-clm p-7">
            <span className="fw-600 data-info-title">Total Staffs</span>
            <span className="mr-top-1 fw-700 data-info-count">2100</span>
          </div>
        </div>
        <div className="data-info__content mr-top-4">
          <div className="data-info__content-title mr-btm-2">
            VIN registration request
          </div>
          <article className="data-info__custom-table">
            <div className="table-header p-6">
              <div className="table-row flex-container">
                <span>Fullname</span>
                <span>Staff reg. number</span>
                <span>Vehicle model/make/year</span>
                <span>Vehicle Plate Number</span>
                <span>Vehicle Identification Number</span>
                <span>Official Position</span>
                <span>Official Department/Office</span>
                <span>Actions</span>
              </div>
            </div>
            <div className="table-body p-6">
              <div className="table-row flex-container">
                <span>Afe Babalola</span>
                <span>AFE3574889</span>
                <span>Toyota Forerunner 2019</span>
                <span>SSM687GJ</span>
                <span>1G1YZ23J9P5803427</span>
                <span>Senior Lecturer</span>
                <span>Computer Science</span>
                <span className="flex-container j-ct-ctr">
                  <span>
                    <img src={deleteIcon} alt="" />
                  </span>
                  <span>
                    <img src={checkmarkIcon} alt="" />
                  </span>
                </span>
              </div>
            </div>
          </article>
        </div>
      </main>
    </section>
  );
};

export default Home;
