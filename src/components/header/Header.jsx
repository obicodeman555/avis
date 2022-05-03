import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import avisLogo from "../../assets/svgs/logo.svg";
import AvisPrimaryButton from "../avisPrimaryButton/AvisPrimaryButton";

const Header = ({ stickyHeader }) => {
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
            <Link to="/discover-more">Discover More</Link>
          </div>
          <div>
            <Link to="/discover-more">Technology</Link>
          </div>
          <div>
            <Link to="#">Managed Services</Link>
          </div>
          <div>
            <Link to="#">About us</Link>
          </div>
        </div>

        <AvisPrimaryButton buttonText="Login to your account" />
      </nav>
    </section>
  );
};

export default Header;
