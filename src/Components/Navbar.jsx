import React, { useState } from 'react'
import Styles from "./Styles/Navbar.module.css"
import { Link } from "react-router-dom"
import {FaBars} from "react-icons/fa"
const Navbar = () => {

    const [mobile, setmobile] = useState(false)

  return (
      <div className={Styles.main}>
          <div className={Styles.left}>
              <h3>Logo</h3>
          </div>
          <div className={Styles.right}>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/carrers">Carrers</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/login">Login</Link>
              <Link to="/logout">Logout</Link>
          </div>

          <button className={Styles.mobilemenu}>
              <FaBars/>
          </button>

      </div>
  );
}

export default Navbar