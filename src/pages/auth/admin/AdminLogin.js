import React from "react";
import { Link } from "react-router-dom";
import { AvisPrimaryButton } from "../../../components";
import "./admin-login.scss";
import RouteBackLink from "../../../components/routeBackLink/RouteBackLink";

const AdminLogin = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  const switchAutoModeHandler = (e) => {
    e.preventDefault();
    setIsLogin((isLogin) => !isLogin);
  };

  return (
    <section className="avis-admin-access font-body">
      <div className="illustrator" id="illustrator__bg">
        <div className="illustrator-image__block__container">
          <div className="illustrator-item__block">
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="admin-access__block" id="admin-access__block__bg">
        <div className="admin-access__block-container">
          <div className="admin-access__form-block rounded-t-lg rounded-br-lg">
            <header className="admin-access__form-block__header">
              <h3>
                {isLogin ? "Create a new admin" : "Login to your account"}
              </h3>
              <p>
                {isLogin
                  ? "Kindly enter your basic information"
                  : "Securely login to your admin dashboard"}
              </p>
            </header>
            <form className="admin-acess__form">
              <div className="admin-acess--form-container">
                <div className="admin-acess--form-control">
                  <label htmlFor="email">Email or Username</label>
                  <span className="admin-acess--form-control__input-block">
                    <input type="text" name="email" id="email" />
                  </span>
                </div>
                <div className="admin-acess--form-control">
                  <label htmlFor="Password">Password</label>
                  <span className="admin-acess--form-control__input-block">
                    <input type="password" name="password" id="Password" />
                  </span>
                </div>
                <div>
                  <div className="admin-access__primary-button-block">
                    <AvisPrimaryButton
                      customButtonClass="font-body"
                      buttonText={
                        isLogin ? "Create a new account" : "Login account"
                      }
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="admin-access__moreActions__block">
            <div>
              <span>
                {isLogin
                  ? "Are you already and admin?"
                  : "Dont have an admin account?"}
              </span>
              <button type="button" onClick={switchAutoModeHandler}>
                {isLogin ? "Log in to your account" : "Create a new account"}
              </button>
            </div>
            <div className="admin-access__forgot-password__block">
              <Link to="/auth/forgot-password">Forgot Password?</Link>
            </div>
          </div>
        </div>
        <RouteBackLink linkTo="/" />
      </div>
    </section>
  );
};

export default AdminLogin;
