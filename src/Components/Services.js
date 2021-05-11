import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
const Services = () => {
  return (
    <div className="services">
      <div className="service-container">
        <div className="head-container">
          <h4 className="service-text" data-aos="fade-right">WHAT WE OFFER</h4>
          <h1 className="service-head" data-aos="fade-up">Our Services</h1>
        </div>
        <div className="card-container">
          <div className="service-card">
            <div className="circle">
              <img src="./logo/services-1.png" alt="service" />
            </div>
            <h2>Branding & Advertising</h2>
            <Link to="/" className="btn active">
              <span>Learn More</span>
              <i class="fas fa-angle-right"></i>
            </Link>
          </div>
          <div className="service-card">
            <div className="circle">
              <img src="./logo/services-2.png" alt="service" />
            </div>
            <h2>Branding & Advertising</h2>
            <Link to="/" className="btn ">
              <span>Learn More</span>
              <i class="fas fa-angle-right"></i>
            </Link>
          </div>
          <div className="service-card">
            <div className="circle">
              <img src="./logo/services-3.png" alt="service" />
            </div>
            <h2>Branding & Advertising</h2>
            <Link to="/" className="btn ">
              <span>Learn More</span>
              <i class="fas fa-angle-right"></i>
            </Link>
          </div>
          <div className="service-card">
            <div className="circle">
              <img src="./logo/services-4.png" alt="service" />
            </div>
            <h2>Branding & Advertising</h2>
            <Link to="/" className="btn ">
              <span>Learn More</span>
              <i class="fas fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
