import React from 'react'
import './Home.css'
import NavBar from './Navbar'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
    Autoplay,Pagination
  } from 'swiper/core';
  SwiperCore.use([Autoplay,Pagination]);
const Home = () => {
    return (
        <>
        <NavBar />
        <div className="home">
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}}  className="mySwiper">
  <SwiperSlide><div className="home-container">
            <img src="./logo/bg-1.jpg"  alt="main-img" className="bg"  />
            <div className="home-info"> 
            <img src="./logo/head.png" alt="head"  className="head-img" />
                <h4 className="main-text">We are</h4>
                <h1 className="main-head">A Creative Digital Studio</h1>
            </div>    
            </div></SwiperSlide>
  <SwiperSlide><div className="home-container">
            <img src="./logo/bg-2.jpg"  alt="main-img" className="bg"  />
            <div className="home-info"> 
            <img src="./logo/head.png" alt="head"  className="head-img" />
                <h4 className="main-text">We are</h4>
                <h1 className="main-head">A Creative Digital Studio</h1>
            </div>    
            </div></SwiperSlide>
  <SwiperSlide><div className="home-container">
            <img src="./logo/bg-3.jpg"  alt="main-img" className="bg"  />
            <div className="home-info"> 
            <img src="./logo/head.png" alt="head"  className="head-img" />
                <h4 className="main-text">We are</h4>
                <h1 className="main-head">A Creative Digital Studio</h1>
            </div>    
            </div></SwiperSlide>
  <SwiperSlide><div className="home-container">
            <img src="./logo/bg-4.jpg"  alt="main-img" className="bg"  />
            <div className="home-info left"> 
            <img src="./logo/head.png" alt="head"  className="head-img" />
                <h4 className="main-text">We are</h4>
                <h1 className="main-head">A Creative Digital Studio</h1>
            </div>    
            </div></SwiperSlide>
  </Swiper>
            
          
        </div>
        </>
    )
}

export default Home
