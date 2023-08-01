// import React, { useState } from "react";
// import Styles from "./Styles/Navbar.module.css";
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import { ImCross } from "react-icons/im";


// const Navbar = () => {
//     const [mobile, setMobile] = useState(false);

//     return (
//         <div className={Styles.navbar}>
//             <div className={Styles.logo}>
//                 <h3>Logo</h3>
//             </div>
//             <ul
//                 className={
//                     mobile ? Styles.navlinksmobile : Styles.navlinks
//                 }
//                 onClick={() => setMobile(false)}>
//                 <Link to="/">
//                     <li>Home</li>
//                 </Link>
//                 <Link to="/about">
//                     <li>About</li>
//                 </Link>
//                 <Link to="/carrers">
//                     <li>Carrers</li>
//                 </Link>
//                 <Link to="/contact">
//                     <li>Contact</li>
//                 </Link>
//                 <Link to="/login">
//                     <li>Login</li>
//                 </Link>
//                 <Link to="/logout">
//                     <li>Logout</li>
//                 </Link>
//             </ul>

//             <button
//                 className={Styles.mobilemenu}
//                 onClick={() => setMobile(!mobile)}>
//                 {mobile ? <ImCross /> : <FaBars />}
//             </button>
//         </div>
//     );
// };

// export default Navbar;

import React, { useState } from "react"

import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
          <Link to='/services' className='services'>
            <li>Services</li>
          </Link>
          <Link to='/skills' className='skills'>
            <li>Skills</li>
          </Link>
          <Link to='/contact' className='home'>
            <li>contact</li>
          </Link>
        </ul>
        {/*
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar

