import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="footer-logo">
          <img className="logo" alt="logo" src="./logo/logo-1.svg" />
        </Link>
        <div className="footer-menus">
          <ul className="footer-menu">
            <li className="footer-item">
              <Link to="/" className="footer-links">
                HOME
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-links">
                SERVICES
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-links">
                CLIENTS
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="footer-links">
                CONTACTS
              </Link>
            </li>
          </ul>
          <p>
            Privacy Policy &nbsp; &#8226; &nbsp; Terms & Conditions &nbsp;
            &#8226; &nbsp; Security
          </p>
        </div>

        <div className="footer-social">
          <h2>Our Social Networks:</h2>
          <p className="footer-bottom-social">
            <i className="fab fa-instagram fa-lg"></i> &nbsp;
            <i className="fab fa-facebook-f fa-lg"></i> &nbsp;
            <i className="fab fa-youtube fa-lg"></i> &nbsp;
            <i className="fab fa-google-plus-g fa-lg"></i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
