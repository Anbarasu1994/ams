import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.scss";

import ams from "../../assets/ams.jpg";
import MarqueeDisplay from "../marquee/MarqueeDisplay";

function Navbar() {
  return (
    <div>
      <header className="navbar">
        <div className="logo-container">
          <div className="logo-class">
            <img src={ams} alt="Logo" className="logo" />
          </div>
          <div className="title-desc">
            <div className="title">
              <div className="logo-text">
                <h1>ANNAI </h1>
              </div>

              <div className="vertical-line"></div>
              <div className="logo-txt1">
                <p>
                  EDUCATIONAL
                  <br />
                  INSTITUTIONS
                </p>
              </div>
            </div>
            <p className="title-word">QUALITY,AFFORDABLE EDUCATION FOR ALL.</p>
          </div>
        </div>

        <nav
          className="nav-links"
          style={
            {
              // marginLeft: "24%",
            }
          }
        >
          <ul>
            <li className="dropdown">
              <a href="/institutions">INSTITUTIONS</a>
              <div className="dropdown-content">
                <a href="/">Arts & Science</a>
                <a href="/">Engineering</a>
                <a href="/">Management</a>
                <a href="/">Architecture</a>
                <a href="/">Physiotherapy</a>
                <a href="/">Pharmacy</a>
              </div>
            </li>
            <li>
              <a href="/">LIFE @ ANNAI</a>
            </li>
            <li>
              <a href="/students-life">VISION & MISSION</a>
            </li>
            <li>
              <a href="/about-us">ABOUT US</a>
            </li>
            <div className="admission-button">
              <a href="/admission">ADMISSION</a>
            </div>
          </ul>
        </nav>
      </header>

      <div className="marquee">
        <MarqueeDisplay />
      </div>
    </div>
  );
}

export default Navbar;
