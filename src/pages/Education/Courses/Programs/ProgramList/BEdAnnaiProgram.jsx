import React from "react";
import "./Prog_desc_annai.scss"
import BEd from "../../../../../assets/Education/BEd.jpeg"; // Import your program's image

function BEdAnnaiProgram() {
  return (
    <div className="programs-container">
      <div className="programs-details">
        <h1>Bachelor of Education (Annai)</h1>
        <img src={BEd} alt="Bachelor of Education " />

        <p>
          Prepare for a fulfilling career in education with our Bachelor of Education (B.Ed) program. This 2-year semester pattern course equips you with the necessary skills and knowledge to become an effective educator.
        </p>

        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Duration:</span> 2 years (semester pattern)
          </li>
          <li>
            <span>Eligibility:</span>
            <ul>
              <li>Relevant Bachelor's Degree</li>
              <li>Minimum age limit is 21 years</li>
            </ul>
          </li>
        </ul>

        <h2>Career Opportunities</h2>
        <p>
          Graduates of the Bachelor of Education (Annai) program have various career opportunities in the field of education, including:
        </p>
        <ul>
          <li>School Teacher</li>
          <li>College Professor</li>
          <li>Educational Administrator</li>
          <li>Educational Consultant</li>
          <li>Curriculum Developer</li>
          <li>Educational Researcher</li>
        </ul>
      </div>
    </div>
  );
}

export default BEdAnnaiProgram;
