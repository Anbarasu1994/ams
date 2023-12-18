/* ArtsNavBar.js */

import React, { useState, useEffect } from "react";
import arts from "../../../assets/arts college.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure you have Bootstrap CSS
import "bootstrap"; // Import Bootstrap JavaScript
import Scrollspy from "react-scrollspy";
import "./ArtsNav.scss";
import { Link } from "react-router-dom";
import UGPrograms from "../Courses/ArtsAndHumanity/UG Programs/UGPrograms";

const ArtsNavBar = () => {
  const [activeLink, setActiveLink] = useState("about");

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSelectedComponent = (component) => {
    setSelectedComponent(component);
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveLink(section.getAttribute("data-link"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (e, dropdownId) => {
    e.preventDefault();
    const dropdown = document.querySelector(`#${dropdownId}`);
    if (dropdown) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      } else {
        dropdown.classList.add("show");
      }
    }
  };

  // Check the screen width and set a flag for mobile view
  const isMobileView = window.innerWidth <= 768;

  return (
    <div className={`NavBarArts ${isMobileView ? "mobile" : ""}`}>
      <nav className="navbarArts">
        <div className="logo-container">
          <div className="logo">
            <img src={arts} alt="" height={100} width={100} />
          </div>
          <div className="logo-txt">
            <h1>ANNAI COLLEGE OF ARTS AND SCIENCE</h1>
          </div>
        </div>
        <div className={`menu ${isMobileView ? "mobile" : ""}`}>
          <Scrollspy
            items={[
              "about",
              "courses-arts",
              "arts-labfacilities",
              "student-life",
            ]}
            currentClassName="active"
          >
            <a href="#about">ABOUT</a>
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#courses-arts"
                role="button"
                onClick={(e) => toggleDropdown(e, "artsDropdown")}
              >
                COURSES
                <ul className="dropdown-menu" id="artsDropdown">
                
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      onClick={(e) => toggleDropdown(e, "artsHumanityDropdown")}
                    >
                      ARTS AND HUMANITY
                      <ul
                        className="dropdown-menu-2 "
                        id="artsHumanityDropdown"
                      >
                        <li>
                        <Link to="/ArtsAndScience/Overview" state={{ selectedComponent: "UGProgramsArts" }}>
                            <a className="dropdown-item">UG-Programs</a>
                          </Link>
                        </li>
                        <li>
                        <Link to="/ArtsAndScience/Overview" state={{ selectedComponent: "PGProgramsArts" }}>

                            <a className="dropdown-item">PG-Programs</a>
                          </Link>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <div>
                    <li className="dropdown-submenu">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        onClick={(e) =>
                          toggleDropdown(e, "scienceTechDropdown")
                        }
                      >
                        SCIENCE AND TECHNOLOGY
                        <ul
                          className="dropdown-menu-2"
                          id="scienceTechDropdown"
                        >
                          <li>
                          <Link to="/ArtsAndScience/Overview" state={{ selectedComponent: "UGProgramsSci" }}>
                              <a className="dropdown-item">UG-Programs</a>
                            </Link>
                          </li>
                          <li>
                          <Link to="/ArtsAndScience/Overview" state={{ selectedComponent: "PGProgramsSci" }}>
                              <a className="dropdown-item">PG-Programs</a>
                            </Link>
                          </li>
                        </ul>
                      </a>
                    </li>
                  </div>
                </ul>
              </a>
            </div>
            <a href="#arts-labfacilities">LAB FACILITIES</a>
            <a href="#student-life">STUDENT LIFE</a>
          </Scrollspy>
        </div>
      </nav>
    </div>
  );
};

export default ArtsNavBar;
