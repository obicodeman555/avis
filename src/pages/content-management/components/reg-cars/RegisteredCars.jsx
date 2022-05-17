import React from "react";
import deleteIcon from "../../../../assets/svgs/delete-forever.svg";
import CtMgtHeader from "../ctmgt-header/CtMgtHeader";
import "./registered-cars.scss";

const RegisteredCars = () => {
  return (
    <>
      <CtMgtHeader
        headerTitle="Registered Cars"
        text="Good afternoon, wash your hands &#128079;"
      />
      <div className="data-info__content mr-top-4">
        <div className="data-info__content-title mr-btm-2">
          Verified Official Cars
        </div>
        <article className="data-info__custom-table">
          <div className="table-header p-6">
            <div className="table-row flex-container">
              <span>Owner's Fullname</span>
              <span>Vehicle/model/make/year</span>
              <span>Vehicle Plate Number</span>
              <span>Vehicle Identification Number</span>
              <span>Actions</span>
            </div>
          </div>
          <div className="table-body p-6">
            <div className="table-row flex-container">
              <span>Afe Babalola</span>
              <span>Toyota Land Cruiser 2017</span>
              <span>ABJ352KK</span>
              <span>2G5KY2300TT67RY13</span>
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

export default RegisteredCars;
