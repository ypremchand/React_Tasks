import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/movie">Movie Pages</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;
