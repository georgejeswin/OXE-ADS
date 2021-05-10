import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <>
         <nav className="navbar">
             <div className="nav-container">
               <Link to="/" className="nav-logo"><img className="logo" alt="logo" src="./logo/logo-1.svg"/></Link>
             <ul className='nav-menu'>
                 <li className="nav-item">
                     <Link to='/' className="nav-links">HOME</Link>
                 </li>
                 <li className="nav-item">
                 <Link to='/' className="nav-links">SERVICES</Link>
                 </li>
                 <li className="nav-item">
                 <Link to='/' className="nav-links">PROCESS</Link>
                 </li>
                 <li className="nav-item">
                 <Link to='/' className="nav-links">WORK</Link>
                 </li>
                 <li className="nav-item">
                 <Link to='/' className="nav-links">CLIENTS</Link>
                 </li>
                 <li className="nav-item">
                 <Link to='/' className="nav-links">CONTACTS</Link>
                 </li>
             </ul>

             </div>
         </nav>   
        </>
    )
}

export default NavBar
