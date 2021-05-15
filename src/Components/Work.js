import React from "react";
import "./Work.css";

const Work = () => {
  return (
    <div className="work container" id="work">
      <div className="work-head">
        <h1 data-aos="fade-up">Industry Expertise</h1>
      </div>
      <div className="work-contents">
        <div className="work-content container">
          <h2>E-Commerce & Retail </h2>
          <div className="work-content-item row">
            <div className="work-content-left col-lg-6 col-md-12 col-12 res-hide">
              <div className="work-content-text">
                <p>
                  We build powerful custom e-commerce development solutions
                  including e-carts & marketplaces, social commerce solutions,
                  e-auction sites, to name a few.
                </p>
              </div>
            </div>
            <div className="work-content-right col-lg-6 col-md-12 col-12">
              <img data-aos="zoom-in" src="./logo/work-ecom.png" alt="" />
            </div>
          </div>
          <div className="work-content container">
            <h2>Education & E-Learning</h2>
            <div className="work-content-item row">
              <div className="work-content-left col-lg-6 col-md-12 col-12">
                <img data-aos="zoom-in" src="./logo/education.png" alt="" />
              </div>
              <div className="work-content-right col-lg-6 col-md-12 col-12 res-hide">
                <div className="work-content-text">
                  <p>
                    Our custom e-learning solutions comprise online training
                    apps, online courses, learning management systems, corporate
                    learning portals, to name a few.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="work-content container">
            <h2>Travel & Tourism</h2>
            <div className="work-content-item row">
              <div className="work-content-left col-lg-6 col-md-12 col-12 res-hide">
                <div className="work-content-text">
                  <p>
                    Our agile software solutions for the travel industry improve
                    your tour & travel business’ RoI and lessen its operational
                    cost to make it more profitable.
                  </p>
                </div>
              </div>
              <div className="work-content-right col-lg-6 col-md-12 col-12">
                <img data-aos="zoom-in" src="./logo/travel.png" alt="" />
              </div>
            </div>
          </div>
          <div className="work-content container">
            <h2>Media & Entertainment</h2>
            <div className="work-content-item row">
              <div className="work-content-left col-lg-6 col-md-12 col-12">
                <img data-aos="zoom-in" src="./logo/media.png" alt="" />
              </div>
              <div className="work-content-right col-lg-6 col-md-12 col-12 res-hide">
                <div className="work-content-text">
                  <p>
                    Our offshore software development company offers social
                    networking development tools, online promotion solutions,
                    media content distribution channels with the latest trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
