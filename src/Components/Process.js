import React from "react";
import "./Process.css";

const Process = () => {
  return (
    <div className="process">
      <div className="process-container">
        <div className="head"  data-aos="fade-up">
          <h1>How We Work.</h1>
        </div>
        <div className="menu">
          <ul className="menu-lists">
            <li className="menu-list" data-aos="fade-up-right">Pick Your Favourite Creative Services</li>
            <li className="menu-list" data-aos="fade-up-right">Pay Using Our Secure Gateway</li>
            <li className="menu-list" data-aos="fade-up-right">
              Give Us A Brief About What You Need Done
            </li>
            <li className="menu-list" data-aos="fade-up-right">
              Sit Back While We Deliver Your Creatives
            </li>
          </ul>
          <img src="./logo/process.png" alt="process imgage" />
        </div>
      </div>
    </div>
  );
};

export default Process;