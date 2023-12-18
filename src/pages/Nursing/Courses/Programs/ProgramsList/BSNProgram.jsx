import React from "react";
import BSNImage from "../../../../../assets/Nursing-clg/BSN.jpg"; // Import your program's image
import "./Nursing_prog.scss"; // Import your program's SCSS file

function BSNProgram() {
  return (
    <div className="programs-container1">
      <div className="programs-details">
        <h1>Bachelor of Science in Nursing</h1>
        <img src={BSNImage} alt="BSN" />
        <p>
          Pursue a rewarding career in healthcare with our Bachelor of Science
          in Nursing program. This 4-year undergraduate course is designed to
          prepare students for a successful journey in the field of nursing.
        </p>

        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Duration:</span> 4 years Semester Pattern
          </li>
          <li>
            <span>Eligibility:</span> The minimum age for admission is 17 years completed.
            10th +2 classes passed in science group with 45% aggregate.
            Student shall be medically fit.
          </li>
          <li>
            <span>Fees:</span> 1 lakh per year
          </li>
        </ul>

        <h2>Syllabus</h2>
        <p>
          The program includes a comprehensive syllabus covering various aspects
          of nursing, healthcare, and medical sciences.
        </p>

        <h2>NMC Recognition / Permission</h2>
        <p>
          The Bachelor of Science in Nursing program is recognized and approved by
          the National Medical Commission (NMC) for nursing education.
        </p>

        <h2>Career Opportunities</h2>
        <p>
          Graduates of the BSN program have diverse career opportunities, including:
        </p>
        <ul>
          <li>Hospital Nursing</li>
          <li>Community Health Nursing</li>
          <li>Teaching and Education</li>
          <li>Research and Development</li>
        </ul>
      </div>
    </div>
  );
}

export default BSNProgram;
