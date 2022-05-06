import React from "react";
import AvisPrimaryButton from "../avisPrimaryButton/AvisPrimaryButton";
import "./vehicle-registration-form.scss";

const VehicleRegistrationForm = ({ formHidden, FormHandler }) => {
  return (
    <div
      className={`position-all-points ${
        formHidden ? "avis-reg-popup avis-reg-popup__show" : "avis-reg-popup"
      }`}
    >
      <div className="avis-reg-popup__close">
        <button type="button" onClick={FormHandler}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9625 14L26.7805 6.18203C27.7398 5.22266 27.7398 3.66719 26.7805 2.70703L25.043 0.969531C24.0836 0.0101563 22.5281 0.0101563 21.568 0.969531L13.75 8.7875L5.93203 0.969531C4.97266 0.0101563 3.41719 0.0101563 2.45703 0.969531L0.719531 2.70703C-0.239844 3.66641 -0.239844 5.22187 0.719531 6.18203L8.5375 14L0.719531 21.818C-0.239844 22.7773 -0.239844 24.3328 0.719531 25.293L2.45703 27.0305C3.41641 27.9898 4.97266 27.9898 5.93203 27.0305L13.75 19.2125L21.568 27.0305C22.5273 27.9898 24.0836 27.9898 25.043 27.0305L26.7805 25.293C27.7398 24.3336 27.7398 22.7781 26.7805 21.818L18.9625 14Z"
              fill="#F2BD57"
            />
          </svg>
        </button>
      </div>
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
