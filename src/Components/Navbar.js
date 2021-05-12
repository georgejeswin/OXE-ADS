import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 980) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="navMobile">
            <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
              <img className="logo" alt="logo" src="./logo/logo-1.png" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                PROCESS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                WORK
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                CLIENTS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                CONTACTS
              </Link>
            </li>
            <li className="nav-item">
              {button && (
                <Link to="/" className="btn btn-3 ">
                  <span>8289906276</span>
                  <i className="fas fa-phone"></i>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
