import React, { useState } from "react";
import Styles from "./Styles/Navbar.module.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Navbar = () => {
    const [mobile, setMobile] = useState(false);

    return (
        <div className={Styles.main}>
            <div className={Styles.logo}>
                <h3>Logo</h3>
            </div>
            <ul
                className={mobile ? "nav-links-mobile" : "nav_links"}
                onClick={() => setMobile(false)}>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/carrers">
                    <li>Carrers</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                <Link to="/login">
                    <li>Login</li>
                </Link>
                <Link to="/logout">
                    <li>Logout</li>
                </Link>
            </ul>

            <button
                className={Styles.mobilemenu}
                onClick={() => setMobile(!mobile)}>
                {mobile ? <ImCross /> : <FaBars />}
            </button>
        </div>
    );
};

export default Navbar;
