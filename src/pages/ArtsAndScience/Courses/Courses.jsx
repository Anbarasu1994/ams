import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Courses.scss"; // Import the SCSS file
import { Link } from "react-router-dom";

function Courses() {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const handleDropdownClick1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    if (isDropdownOpen2) {
      setIsDropdownOpen2(false);
    }
  };

  const handleDropdownClick2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    if (isDropdownOpen1) {
      setIsDropdownOpen1(false);
    }
  };

  return (
    <div id="courses-arts" className="courses-wrap">
      <div className="courses-container">
        <h2>Explore Our Diverse Academic Programs</h2>
        <p>
          Annai College of Arts and Science is dedicated to providing a diverse
          range of undergraduate (UG) and postgraduate (PG) programs, offering
          students the opportunity to achieve their academic and career goals.
          Our institution is nestled in a serene and conducive learning
          environment, fostering quality education and nurturing young minds.
          Here's an overview of the programs we offer:
        </p>

        <p>
          Whether you're pursuing a bachelor's degree or aiming for advanced studies, our programs cater to a wide range of academic interests and career aspirations. Our dedicated faculty, state-of-the-art facilities, and supportive environment ensure that you receive a high-quality education that prepares you for success.
        </p>

        <p>
          We understand that every student is unique, and that's why we offer both undergraduate and postgraduate programs to meet your educational needs. Explore our programs below and embark on a journey of knowledge and discovery.
        </p>

        <div className="horizontal-dropdowns">
          <div className="dropdown">
            <a
              className="nav-link dropdown-toggle"
              role="button"
              onClick={handleDropdownClick1}
            >
             ARTS AND HUMANITY COURSES
            </a>
            <ul
              className={`dropdown-menu centered-dropdown-menu ${
                isDropdownOpen1 ? "show" : ""
              }`}
            >
              <li>
              <Link to="/ArtsAndScience/Overview" state={{ selectedComponent: "UGProgramsArts" }}>
                  <a className="dropdown-item">UG Programs</a>
                </Link>
              </li>
              <li>
              <Link to="/ArtsAndScience/Overview" state={{ selectedComponent: "PGProgramsArts" }}>
                  <a className="dropdown-item">PG Programs</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <a
              className="nav-link dropdown-toggle"
              role="button"
              onClick={handleDropdownClick2}
            >
              SCIENCE AND TECHNOLOGY COURSES
            </a>
            <ul
              className={`dropdown-menu centered-dropdown-menu ${
                isDropdownOpen2 ? "show" : ""
              }`}
            >
              <li>
              <Link to="/ArtsAndScience/Overview" state={{ selectedComponent: "UGProgramsSci" }}>
                  <a className="dropdown-item">UG Programs</a>
                </Link>
              </li>
              <li>
              <Link to="/ArtsAndScience/Overview" state={{ selectedComponent: "PGProgramsSci" }}>
                  <a className="dropdown-item">PG Programs</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
