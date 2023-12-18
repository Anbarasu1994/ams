// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import ams from "../../assets/ams.jpg";
import MarqueeDisplay from "../marquee/MarqueeDisplay";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
            <p className="title-word">QUALITY, AFFORDABLE EDUCATION FOR ALL.</p>
          </div>
        </div>

        <nav className="nav-links">
          <ul>
            <li>
              <a href="/about-us">ABOUT US</a>
            </li>
            <li className="dropdown">
              <a onClick={toggleDropdown}>
                INSTITUTIONS {dropdownOpen ? "▲" : "▼"}
              </a>
              <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
                <Link to="/ArtsAndScience" target="_blank">Arts & Science</Link>
                <Link to="/PharmacyCollege"  target="_blank">Pharmacy</Link>
                <Link to="/Nursing" target="_blank">Nursing</Link>
                <Link to="/Education" target="_blank">Education</Link>
                <Link to="/Vellamal" target="_blank">Vellamal</Link>
              </div>
            </li>
            <li>
              <a href="/">LIFE @ ANNAI</a>
            </li>
            <li>
              <a href="/students-life">INFRASTRUCTURE</a>
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
