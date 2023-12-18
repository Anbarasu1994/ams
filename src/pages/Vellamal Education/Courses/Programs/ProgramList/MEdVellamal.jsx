import React from "react";
import "./Prog_desc_Vellamal.scss"

import MEd from "../../../../../assets/Education/MEd.jpg"; // Import your program's image

function MEdVellamal() {
  return (
    <div className="programs-container2">
      <div className="programs-details">
        <h1>Master of Education </h1>
        <img src={MEd} alt="Master of Education" />

        <p>
          Elevate your career in education with our Master of Education (M.Ed) program. This advanced 2-year semester pattern course is designed to enhance your teaching and educational leadership skills.
        </p>

        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Duration:</span> 2 years (semester pattern)
          </li>
          <li>
            <span>Eligibility:</span>
            <ul>
              <li>Relevant Bachelor's Degree in Education</li>
              <li>Minimum age limit is 21 years</li>
            </ul>
          </li>
        </ul>

        <h2>Career Opportunities</h2>
        <p>
          Graduates of the Master of Education (Annai) program have various advanced career opportunities in the field of education and educational leadership, including:
        </p>
        <ul>
          <li>Educational Leadership and Administration</li>
          <li>Curriculum Development</li>
          <li>Educational Research and Policy Analysis</li>
          <li>College or University Professor</li>
          <li>Educational Consultant</li>
          <li>Educational Program Manager</li>
        </ul>
      </div>
    </div>
  );
}

export default MEdVellamal;
