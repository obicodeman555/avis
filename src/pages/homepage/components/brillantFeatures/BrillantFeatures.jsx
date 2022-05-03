import React from "react";
import verifiedUserImage from "../../../../assets/images/verified.png";
import "./brillantFeatures.scss";

const BrillantFeatures = () => {
  return (
    <div className="brillantFeatures">
      <div className="brillantFeatures__text__container">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.125 3.75H31.875V13.125H28.125V3.75ZM40.665 16.6875L47.2388 10.1138L49.89 12.765L43.3162 19.3388L40.665 16.6875ZM46.875 28.125H56.25V31.875H46.875V28.125ZM40.665 43.3125L43.3162 40.6631L49.89 47.2369L47.2388 49.8881L40.665 43.3125ZM28.125 46.875H31.875V56.25H28.125V46.875ZM10.1138 47.235L16.6875 40.6613L19.3388 43.3125L12.7669 49.8863L10.1138 47.235ZM3.75 28.125H13.125V31.875H3.75V28.125ZM10.1156 12.765L12.7669 10.1138L19.3406 16.6875L16.6875 19.3388L10.1156 12.765ZM30 22.5C31.4834 22.5 32.9334 22.9399 34.1668 23.764C35.4001 24.5881 36.3614 25.7594 36.9291 27.1299C37.4968 28.5003 37.6453 30.0083 37.3559 31.4632C37.0665 32.918 36.3522 34.2544 35.3033 35.3033C34.2544 36.3522 32.918 37.0665 31.4632 37.3559C30.0083 37.6453 28.5003 37.4968 27.1299 36.9291C25.7594 36.3614 24.5881 35.4001 23.764 34.1668C22.9399 32.9334 22.5 31.4834 22.5 30C22.5025 28.0116 23.2935 26.1054 24.6994 24.6994C26.1054 23.2935 28.0116 22.5025 30 22.5V22.5ZM30 18.75C27.775 18.75 25.5999 19.4098 23.7498 20.646C21.8998 21.8821 20.4578 23.6391 19.6064 25.6948C18.7549 27.7505 18.5321 30.0125 18.9662 32.1948C19.4003 34.3771 20.4717 36.3816 22.045 37.955C23.6184 39.5283 25.6229 40.5998 27.8052 41.0338C29.9875 41.4679 32.2495 41.2451 34.3052 40.3936C36.3609 39.5422 38.1179 38.1002 39.354 36.2502C40.5902 34.4001 41.25 32.225 41.25 30C41.25 27.0163 40.0647 24.1548 37.955 22.045C35.8452 19.9353 32.9837 18.75 30 18.75Z"
            fill="black"
          />
        </svg>

        <h1>Brillant Features</h1>
      </div>
      <div className="brillantFeatures__cards">
        <div className="brillantFeatures__card">
          <div className="card__body">
            <div className="card__image">
              <img
                src="https://media.istockphoto.com/photos/driving-car-on-the-road-travel-background-picture-id1214872234?k=20&m=1214872234&s=612x612&w=0&h=xpw_tuyK55rlQsiUeUNQRaKTQHfi5pk8vRBtYDwQb84="
                alt="driving"
              />
            </div>
            <div className="card__text__container">
              <h4>Vehicle Identity</h4>
              <p>
                Identify official cars, and secure access control in every
                parking facility, gated community and campus.
              </p>
            </div>
          </div>
        </div>
        <div className="brillantFeatures__card">
          <div className="card__body">
            <div className="card__image">
              <img src={verifiedUserImage} alt="driving" />
            </div>
            <div className="card__text__container">
              <h4>Verified User Access</h4>
              <p>
                Designed to perform in high security. Restricted to only
                verified and authorised users.
              </p>
            </div>
          </div>
        </div>
        <div className="brillantFeatures__card">
          <div className="card__body">
            <div className="card__image">
              <img
                src="https://media.istockphoto.com/photos/document-management-system-being-setup-by-it-consultant-working-on-picture-id1291478674?k=20&m=1291478674&s=612x612&w=0&h=CUXvqhNljl3HZBCerotvBl4WaCkdlQlvXn7Y2yoETKc="
                alt="driving"
              />
            </div>
            <div className="card__text__container">
              <h4>Management Flexibility</h4>
              <p>
                Administrator or manager tracks all information in one central
                place, restrict access and protect sensitive information
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrillantFeatures;
