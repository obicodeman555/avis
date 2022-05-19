import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AvisPrimaryButton, RouteBackLink } from "../../../components";
import manTyping from "../../../assets/images/man-typing.png";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const loginHandler = () => {
    localStorage.setItem("user", "text");
    navigate("/guest/home");
  };

  return (
    <div className="guest__background font-body">
      <RouteBackLink linkTo="/" />
      <div className="guest__background__container rounded-br-lg rounded-t-lg">
        <div className="guest-login-form__block">
          <header className="guest-login-form__block-header">
            <h3>Welcome Back</h3>
            <span>Enter your details to log in</span>
          </header>
          <form className="guest-login-form">
            <div className="guest-login-form__container">
              <div className="form-control">
                <label htmlFor="email">Email or Username</label>
                <span className="form-control__input-block">
                  <input type="text" name="email" id="email" />
                </span>
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <span className="form-control__input-block">
                  <input type="password" name="Password" id="password" />
                </span>
              </div>
              <div className="form-control">
                <span className="form-control__button-block">
                  <AvisPrimaryButton
                    buttonText="Login your account"
                    onClick={loginHandler}
                  />
                </span>
              </div>
            </div>
            <div className="request-an-account">
              Not a member? To request an account, please contact your
              administrator
            </div>
            <div className="forgot-password__link">
              <Link to="/guest/forgot-password">
                Can't access your account?
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="guest-illustrator__image">
        <div className="guest-illustrator__image-block">
          <img src={manTyping} alt="guest illustrator" />
        </div>
      </div>
    </div>
  );
};

export default Login;
