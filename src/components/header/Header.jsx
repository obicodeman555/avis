import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import avisLogo from "../../assets/svgs/logo.svg";
import adminIcon from "../../assets/svgs/admin.svg";
import userIcon from "../../assets/svgs/user.svg";
import paperPlaneIcon from "../../assets/svgs/paper_plane.svg";
import AvisPrimaryButton from "../avisPrimaryButton/AvisPrimaryButton";
import PrimaryCard from "../primaryCard/PrimaryCard";

const Header = ({ stickyHeader }) => {
  const [loginAcctDropdown, setLoginAcctDropdown] = useState(false);

  const showLoginDropdownHandler = () => {
    setLoginAcctDropdown((prev) => !prev);
  };
  return (
    <section
      className={`${
        stickyHeader
          ? "avis__header avis__header--stickyActive"
          : "avis__header"
      }`}
    >
      <nav className="avis__header__navigations">
        <div className="avis__logo">
          <Link to="/">
            <img src={avisLogo} alt="avis" />
          </Link>
        </div>
        <div className="link__group">
          <div>
            <Link to="/discover-more">Discover more</Link>
          </div>
          <div>
            <Link to="/discover-more">Technology</Link>
          </div>
          <div>
            <Link to="#">Managed services</Link>
          </div>
          <div>
            <Link to="#">About us</Link>
          </div>
        </div>
        <AvisPrimaryButton
          buttonText="Login to your account"
          onClick={showLoginDropdownHandler}
        />
        {loginAcctDropdown && (
          <div className="loginAccess__links__card">
            <PrimaryCard
              cardHeaderText="Choose login account"
              customIdName="loginAccess__slideCard"
            >
              <div className="link__buttonShaped">
                <Link
                  to="/auth/admin/login"
                  className="link__buttonShaped--linkToAcctType"
                >
                  <span>
                    <img
                      src={adminIcon}
                      alt="admin icon"
                      className="acctType__linkIcon"
                    />
                  </span>
                  <span className="text__acctType">Login as an admin</span>
                  <span>
                    <img
                      src={paperPlaneIcon}
                      alt="paper plane icon"
                      className="paperPlane"
                    />
                  </span>
                </Link>
              </div>
              <div className="link__buttonShaped">
                <Link
                  to="/auth/guest/login"
                  className="link__buttonShaped--linkToAcctType"
                >
                  <span>
                    <img
                      src={userIcon}
                      alt="admin icon"
                      className="acctType__linkIcon"
                    />
                  </span>
                  <span className="text__acctType">Login as a guest</span>
                  <span>
                    <img
                      src={paperPlaneIcon}
                      alt="paper plane icon"
                      className="paperPlane"
                    />
                  </span>
                </Link>
              </div>
            </PrimaryCard>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Header;
