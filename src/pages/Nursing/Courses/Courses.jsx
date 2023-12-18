import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Courses.scss"; // Import the SCSS file
import { Link } from "react-router-dom";
import NursingPrograms from "./Programs/NursingPrograms";

function Courses() {
  return (
    <div id="courses-nursing" className="courses-wrap2">
      <div className="courses-container">
        <h2>Explore Our Diverse Nursing Programs</h2>
        <p>
          Annai College of Nursing and Science is dedicated to providing a diverse
          range of undergraduate (UG) and postgraduate (PG) nursing programs, offering
          students the opportunity to achieve their academic and career goals in the field of nursing and healthcare.
        </p>

        <p>
          Whether you're pursuing a bachelor's degree in nursing or aiming for advanced
          studies in healthcare, our programs cater to a wide range of academic interests and
          career aspirations within the nursing field. Our dedicated faculty, state-of-the-art
          facilities, and supportive environment ensure that you receive a
          high-quality nursing education that prepares you for a successful career in healthcare.
        </p>

        <p>
          We understand that every nursing student is unique, and that's why we offer
          both undergraduate and postgraduate nursing programs to meet your educational
          needs. Explore our nursing programs below and embark on a journey of knowledge
          and discovery in the field of nursing and healthcare.
        </p>

        <div className="horizontal-dropdowns">
          <div className="dropdown">
            <Link to="/Nursing/Courses">
              {" "}
              <a className="nav-link dropdown" role="button">
                NURSING COURSES
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
