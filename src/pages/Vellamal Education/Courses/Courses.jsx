import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Courses.scss"; // Import the SCSS file
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div id="courses-education" className="courses-wrap1">
      <div className="courses-container">
        <h2>Explore Our Education Programs</h2>
        <p>
          Vellamal College of Education is dedicated to providing a diverse range of undergraduate (UG) and postgraduate (PG) programs in the field of education, offering students the opportunity to achieve their academic and career goals in the realm of teaching and education.
        </p>

        <p>
          Whether you're pursuing a Bachelor of Education (B.Ed) degree or aiming for advanced studies with a Master of Education (M.Ed) program, our courses cater to a wide range of academic interests and career aspirations in the field of education. Our experienced faculty, state-of-the-art facilities, and supportive environment ensure that you receive a high-quality education that prepares you for a successful career in teaching and education.
        </p>

        <p>
          We understand that every student is unique, and that's why we offer both undergraduate and postgraduate education programs to meet your educational needs. Explore our education programs below and embark on a journey of knowledge and discovery in the field of teaching and education.
        </p>

        <div className="horizontal-dropdowns">
          <div className="dropdown">
            <Link to="/Vellamal/Courses">
              {" "}
              <a className="nav-link dropdown" role="button">
                EDUCATION COURSES
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
