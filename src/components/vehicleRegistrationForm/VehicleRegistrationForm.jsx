import React, { useEffect, useRef } from "react";
import AvisPrimaryButton from "../avisPrimaryButton/AvisPrimaryButton";
import CloseModalButton from "../closeModalButton/CloseModalButton";
import { getAllStaffs, addRegisteredVehicle } from "../../lib/api";
import useHttp from "../../hooks/useHttp";
import "./vehicle-registration-form.scss";
// import Notify from "../notification/Notify";

const VehicleRegistrationForm = ({ formHidden, FormHandler }) => {
  // const [showNotify, setShowNotify] = useState(false);
  const staffFullNameRef = useRef(null);
  const staffRegNumberRef = useRef(null);
  const vehicleModelRef = useRef(null);
  const vehiclePlateNumberRef = useRef(null);
  const jobPositionRef = useRef(null);
  const vinRef = useRef(null);
  const staffDeptRef = useRef(null);

  const { sendRequest: getStaffsRequest, data: staffs } = useHttp(
    getAllStaffs,
    true
  );

  const { sendRequest, status: addRegStatus } = useHttp(addRegisteredVehicle);

  useEffect(() => {
    getStaffsRequest();
  }, [getStaffsRequest]);

  const addRegisterVehicleHandler = (e) => {
    e.preventDefault();

    let vehicleData = {
      fullName: staffFullNameRef.current.value,
      staffRegNumber: staffRegNumberRef.current.value,
      vehicleModel: vehicleModelRef.current.value,
      vehiclePlateNumber: vehiclePlateNumberRef.current.value,
      jobPosition: jobPositionRef.current.value,
      vin: vinRef.current.value,
      staffDept: staffDeptRef.current.value,
      isApproved: false,
    };

    //check if staff registration number is valid
    const checkRegNumber = (staff) => {
      return staff.regNumber === vehicleData.staffRegNumber;
    };

    const staffFound = staffs.find(checkRegNumber);

    if (staffFound) {
      sendRequest(vehicleData);
      staffFullNameRef.current.value = "";
      staffRegNumberRef.current.value = "";
      vehicleModelRef.current.value = "";
      vehiclePlateNumberRef.current.value = "";
      jobPositionRef.current.value = "";
      vinRef.current.value = "";
      staffDeptRef.current.value = "";
      alert("Form Submitted, Kindly await approval");
    } else {
      alert("Form cannot be submitted due to incorrect staff reg number");
    }
  };

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
          <form className="avis__gstForm" onSubmit={addRegisterVehicleHandler}>
            <div className="avis__gstForm__control">
              <div className="text-input-block">
                <input
                  type="text"
                  name=""
                  placeholder="Owner/Driver's full name"
                  ref={staffFullNameRef}
                  required
                />
              </div>
            </div>
            <div className="avis__gstForm__control">
              <div className="text-input-block">
                <input
                  type="text"
                  ref={staffRegNumberRef}
                  placeholder="Staff/Employment Registration Number"
                  required
                />
              </div>
            </div>
            <div className="avis__gstForm__control">
              <div className="text-input-block">
                <input
                  type="text"
                  name="model"
                  ref={vehicleModelRef}
                  placeholder="Vehicle Model"
                  required
                />
              </div>
            </div>
            <div className="avis__gstForm__control">
              <div className="text-input-block">
                <input
                  type="text"
                  name="model"
                  placeholder="Vehicle Lincensed Plate Number"
                  ref={vehiclePlateNumberRef}
                  required
                />
              </div>
            </div>
            <div className="avis__gstForm__control">
              <div className="text-input-block">
                <input
                  type="text"
                  name="vin"
                  placeholder="Vehicle Identification Number"
                  ref={vinRef}
                  required
                />
              </div>
            </div>
            <div className="avis__gstForm__control">
              <div className="text-input-block">
                <input
                  type="text"
                  name="job_position"
                  placeholder="Your official Job Position"
                  ref={jobPositionRef}
                  required
                />
              </div>
            </div>
            <div className="avis__gstForm__control">
              <div className="text-input-block">
                <input
                  type="text"
                  name="department"
                  placeholder="Your official Department/Office"
                  ref={staffDeptRef}
                  required
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
                {console.log(addRegStatus)}
                <AvisPrimaryButton
                  buttonType="submit"
                  buttonText={`${
                    addRegStatus === "pending" ? "Processing..." : "Send"
                  }`}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VehicleRegistrationForm;
