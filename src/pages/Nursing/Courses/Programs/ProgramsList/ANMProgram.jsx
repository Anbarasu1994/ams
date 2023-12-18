import React from "react";
import ANMImage from "../../../../../assets/Nursing-clg/anm.png"; // Import your program's image
// Import your program's image
import "./Nursing_prog.scss"; // Import your program's SCSS file

function ANMProgram() {
  return (
    <div className="programs-container1">
      <div className="programs-details">
        <h1>Auxiliary Nurse and Midwife (ANM)</h1>
        <img src={ANMImage} alt="ANM" />
        <p>
          Become a skilled healthcare professional with our Auxiliary Nurse and Midwife (ANM) program.
          This 2-year course is designed to prepare you for a fulfilling career in nursing and midwifery.
        </p>

        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Duration:</span> 2 years
          </li>
          <li>
            <span>Eligibility:</span> The minimum age for admission is 17 years.
            10+2 class passed in any group with 45% aggregate.
            The maximum age for admission shall be 35 years.
          </li>
        </ul>

        <h2>Career Opportunities</h2>
        <p>
          Graduates of the ANM program have various career opportunities in healthcare and midwifery, including:
        </p>
        <ul>
          <li>Staff Nurse</li>
          <li>Community Health Worker</li>
          <li>Midwife</li>
          <li>Health Visitor</li>
        </ul>
      </div>
    </div>
  );
}

export default ANMProgram;
