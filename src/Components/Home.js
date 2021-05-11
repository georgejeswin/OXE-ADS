import React from 'react'
import './Home.css'
import NavBar from './Navbar'
const Home = () => {
    return (
        <>
        <NavBar />
        <div className="home">
            <div className="home-container">
                <img src="./logo/head.png" alt="head"  className="head-img" />
                <h4 className="main-text">We are</h4>
                <h1 className="main-head">A Creative Digital Studio</h1>
            </div>
        </div>
        </>
    )
}

export default Home
