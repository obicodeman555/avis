import React, { useCallback } from "react";
import { VehicleRegistrationForm } from "../../../../components";
import AvisPrimaryButton from "../../../../components/avisPrimaryButton/AvisPrimaryButton";
import "./hero.scss";

const Hero = React.forwardRef((props, ref) => {
  const [formHidden, setFormHidden] = React.useState(false);

  console.log(formHidden);

  const FormHandler = useCallback((e) => {
    e.preventDefault();
    setFormHidden((prev) => !prev);
  }, []);

  return (
    <>
      <VehicleRegistrationForm
        formHidden={formHidden}
        FormHandler={FormHandler}
      />
      <div className="avis__hero" ref={ref} id="avis__hero">
        <div className="avis__hero__text">
          <div className="avis__hero__text__wrapper">
            <div className="avis__intro">
              <h1 className="avis__intro__text">
                <span>Automated</span>
                <span>Vehicle</span>
              </h1>
              <h1 className="avis__intro__text">
                <span>Identification</span>
                <span>System</span>
              </h1>
            </div>

            <p className="avis__intro__description">
              Identify a vehicle by reading its Vehicle Identification Number
              and either retaining the information, checking it against a
              database, or transmitting it for storing or processing.
            </p>

            <div className="registrationButton">
              <AvisPrimaryButton
                buttonText="Click to get registered"
                onClick={FormHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Hero;
