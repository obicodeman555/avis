import React from "react";
import { Link } from "react-router-dom";
import footerRibbon from "../../assets/svgs/ribbon.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__upper__content">
        <div className="container">
          <h1>Admin Contact</h1>
          <div className="contact__address">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.3333 6.66663H6.66668C5.78262 6.66663 4.93478 7.01782 4.30965 7.64294C3.68453 8.26806 3.33334 9.1159 3.33334 9.99996V30C3.33334 30.884 3.68453 31.7319 4.30965 32.357C4.93478 32.9821 5.78262 33.3333 6.66668 33.3333H33.3333C34.2174 33.3333 35.0652 32.9821 35.6904 32.357C36.3155 31.7319 36.6667 30.884 36.6667 30V9.99996C36.6667 9.1159 36.3155 8.26806 35.6904 7.64294C35.0652 7.01782 34.2174 6.66663 33.3333 6.66663V6.66663ZM33.3333 14.5L20 23.39L6.66668 14.5V10.495L20 19.3833L33.3333 10.495V14.5Z"
                fill="white"
              />
            </svg>
            <span>admin@avis.com</span>
          </div>
        </div>
      </div>
      <div className="footer__lower__content">
        <div className="container">
          <span>© 2022 Techbrilliance, Inc. Copyright</span>

          <span>
            <Link to="/privacy">Privacy</Link>
          </span>
          <span>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </span>
        </div>
        <div className="footer__image">
          <img src={footerRibbon} alt="ribbon footer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
