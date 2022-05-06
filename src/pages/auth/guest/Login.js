import React from "react";
import { Link } from "react-router-dom";
import { AvisPrimaryButton } from "../../../components";
import "./login.scss";

const Login = () => {
  return (
    <div className="guest__background font-body">
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
                  <AvisPrimaryButton buttonText="Login your account" />
                </span>
              </div>
            </div>
            <div className="forgot-password__link">
              <Link to="/guest/forgot-password">Forgot Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
