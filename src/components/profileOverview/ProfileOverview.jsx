import React from "react";
import "./profile-overview.scss";
import profileIcon from "../../assets/svgs/profile.svg";
import carIcon from "../../assets/svgs/car.svg";
import plateNumberIcon from "../../assets/svgs/plate_number.svg";
import vinIcon from "../../assets/svgs/vin.svg";
import suitcaseIcon from "../../assets/svgs/suitcase.svg";
import searchFoundImage from "../../assets/images/search-found.png";

const ProfileOverview = () => {
  return (
    <section className="profile-overview">
      <div className="container">
        <div className="profile-content">
          <header className="profile-content-header">
            <h1 className="x-large--text">Profie Information Found</h1>
            <div>
              <img src={searchFoundImage} alt="search found" />
            </div>
          </header>
          <div className="grid-col-3">
            <div className="profile-content__item grid-span-2">
              <span className="profile-content__icon profile-content__icon--positioned-absolute">
                <img src={profileIcon} alt="profile icon" />
              </span>
              <span className="column-flexed text-aligned-center personality-info">
                <span className="x-large--text capitalize-text gray-colored-text mr-top-lg">
                  afe babalola
                </span>
                <span className="capitalize-text gray-colored-text medium--text">
                  chief financial officer
                </span>
                <span className="silver-pink-colored-text medium--text">
                  Employment Reg No: AFE/0321/15/34432
                </span>
              </span>
            </div>
            <div className="profile-content__item">
              <span className="large--text text-aligned-center primary-text-color">
                Vehicle Model/Make
              </span>
              <span className="profile-content__icon">
                <img src={carIcon} alt="car icon" />
              </span>
              <span className="description text-aligned-center gray-colored-text">
                The make of a car is the brand of the car and the model is the
                specific product.
              </span>
              <span className="silver-pink-colored-text medium--text">
                Mercedes-Benz 225
              </span>
            </div>
            <div className="profile-content__item">
              <span className="large--text text-aligned-center primary-text-color">
                Vehicle Lincensed Plate Number
              </span>
              <span className="profile-content__icon">
                <img src={plateNumberIcon} alt="plate number icon" />
              </span>
              <span className="description text-aligned-center gray-colored-text">
                The official set of numbers and letters shown on the front and
                back of a road vehicle
              </span>
              <span className="silver-pink-colored-text medium--text">
                GGE - 123ZY
              </span>
            </div>
            <div className="profile-content__item">
              <span className="large--text text-aligned-center primary-text-color">
                Vehicle Identification Number
              </span>
              <span className="profile-content__icon">
                <img src={vinIcon} alt="plate number icon" />
              </span>
              <spanc className="description text-aligned-center gray-colored-text">
                A unique code, including a seria number, used by the automotive
                industry to identify individual vehicles
              </spanc>
              <span className="silver-pink-colored-text medium--text">
                1HD1BX510BB027648
              </span>
            </div>
            <div className="profile-content__item">
              <span className="large--text text-aligned-center primary-text-color">
                Offical Department/Office
              </span>
              <span className="profile-content__icon">
                <img src={suitcaseIcon} alt="plate number icon" />
              </span>
              <span className="description text-aligned-center gray-colored-text">
                Where employees perform administrative work to support and
                realize goals of of the institution
              </span>
              <span className="silver-pink-colored-text medium--text">
                Software Engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileOverview;
