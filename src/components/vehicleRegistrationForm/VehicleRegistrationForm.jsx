import React from "react";
import AvisPrimaryButton from "../avisPrimaryButton/AvisPrimaryButton";
import CloseModalButton from "../closeModalButton/CloseModalButton";
import "./vehicle-registration-form.scss";

const VehicleRegistrationForm = ({ formHidden, FormHandler }) => {
  return (
    <div
      className={`position-all-points ${
        formHidden ? "avis-reg-popup avis-reg-popup__show" : "avis-reg-popup"
      }`}
    >
      <CloseModalButton onClick={FormHandler} />
      <div className="t-width_6 rounded-br-lg rounded-t-lg avis-reg-popup__container">
        <div className="avis-reg-content">
          <div className="avis-reg-introText">
            <div className="avis-reg-introText__container">
              Fill out the form and be sure to add your details correctly before
              submit
            </div>
          </div>
          <form className="avis__gstForm">
            <div className="avis__gstForm__control">
              <div className="text-input-block">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Owner/Driver's full name"
                />
              </div>
            </div>
            <div className="avis__gstForm__control">
              <div className="text-input-block">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Staff/Employment Registration Number"
                />
              </div>
            </div>
            <div className="avis__gstForm__control">
              <div className="text-input-block">
                <input
                  type="text"
                  name="model"
                  id=""
                  placeholder="Vehicle Model"
                />
              </div>
            </div>
            <div className="avis__gstForm__control">
              <div className="text-input-block">
                <input
                  type="text"
                  name="model"
                  id=""
                  placeholder="Vehicle Lincensed Plate Number"
                />
              </div>
            </div>
            <div className="avis__gstForm__control">
              <div className="text-input-block">
                <input
                  type="text"
                  name="vin"
                  id=""
                  placeholder="Vehicle Identification Number"
                />
              </div>
            </div>
            <div className="avis__gstForm__control">
              <div className="text-input-block">
                <input
                  type="text"
                  name="job_position"
                  id=""
                  placeholder="Your official Job Position"
                />
              </div>
            </div>
            <div className="avis__gstForm__control">
              <div className="text-input-block">
                <input
                  type="text"
                  name="department"
                  id=""
                  placeholder="Your official Department/Office"
                />
              </div>
            </div>
            <div className="avis__gstForm__control">
              <div className="avis__gstForm__control__file">
                <button type="button">
                  <label
                    htmlFor="vreg__file__input"
                    className="vreg__addFiles__label"
                  >
                    Add Files
                  </label>
                </button>
                <input type="file" name="vreg-files" id="vreg__file__input" />
              </div>
            </div>
            <div className="avis__gstForm__control">
              <div className="avis__gstForm__control__checkbox">
                <input
                  type="checkbox"
                  name="dataAgreement"
                  id="vreg__checkBox"
                />
                <label
                  htmlFor="vreg__checkBox"
                  className="vreg__addFiles__checkboxLabel"
                >
                  I agree to the processing of personal data
                </label>
              </div>
            </div>

            <div className="avis__gstForm__control">
              <div className="avis__vregForm__componentWrapper">
                <AvisPrimaryButton buttonText="Send" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VehicleRegistrationForm;
