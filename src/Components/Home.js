import React from "react";
import "./Home.css";
import NavBar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Autoplay, Pagination } from "swiper/core";
SwiperCore.use([Autoplay, Pagination]);
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="home-container">
              <img src="./logo/bg-1.jpg" alt="main-img" className="bg" />
              <div className="home-info">
                <img src="./logo/head.png" alt="head" className="head-img" />
                <h4 className="main-text">We are</h4>
                <h1 className="main-head">A Creative Digital Studio</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-container">
              <img src="./logo/bg-2.jpg" alt="main-img" className="bg" />
              <div className="home-info">
                {/* <img src="./logo/head.png" alt="head" className="head-img" /> */}
                <h4 className="slide2-1">
                  Join us to be the <br />
                  <span className="slide2-2">UNIQUE</span> <br />
                  and <br />
                  <span className="slide2-2">CREATIVE</span>{" "}
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-container">
              <img src="./logo/bg-3.jpeg" alt="main-img" className="bg bg-3" />
              <div className="home-info">
                {/* <img src="./logo/head.png" alt="head" className="head-img" /> */}
                <h4 className="slide3-1">
                  RAISE YOUR <br />
                  BUSINESS TO <br />
                  <span className="slide3-2">NEXT</span> <br />
                  <span className="slide3-3">LEVEL</span>
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-container">
              <img src="./logo/bg-4.jpeg" alt="main-img" className="bg" />
              <div className="home-info">
                {/* <img src="./logo/head.png" alt="head" className="head-img" /> */}
                <h4 className="slide4-1">
                  GREAT <br />
                  <span className="slide4-2">PRODUCTS</span> <br />
                  GREAT <br />
                  <span className="slide4-2">CODE</span>
                </h4>
                <p className="slide4-3">
                  We design and develop <br className="slide4-3" /> awesome web
                  and apps
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Home;
