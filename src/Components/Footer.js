import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="footer-logo">
          <img className="logo" alt="logo" src="./logo/logo-1.png" />
        </Link>
        <div className="footer-menus">
          <ul className="footer-menu">
            <li className="footer-item">
              <a href="#home" className="footer-links">
                HOME
              </a>
            </li>
            <li className="footer-item">
            <a href="#services" className="footer-links">
                SERVICES
              </a>
            </li>
            <li className="footer-item">
              <a href="#process" className="footer-links">
                PROCESS
              </a>
            </li>
            <li className="footer-item">
              <a href="#contact" className="footer-links">
                CONTACTS
              </a>
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
