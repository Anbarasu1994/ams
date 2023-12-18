import React from "react";
import BComImage from "../../../../../../assets/UG-ARTS/3.jpg"; // Import your program's image
import "./UG_Prog_desc.scss"; // Import your program's SCSS file

function BComComputerApplication() {
  return (
    <div className="programs-container-arts-ug">
      <div className="programs-header">
        <h1>Bachelor of Commerce (Computer Application)</h1>
        {/* <img src={BComImage} alt="BCom Computer Application" /> */}
      </div>
      <div className="program-details">
        <div className="card">
          <h2>Program Details</h2>
          <p>
            Our Bachelor of Commerce program with a specialization in Computer
            Application is designed to equip you with the skills and knowledge
            needed to excel in the world of commerce and technology. This 3-year
            program combines core commerce subjects with computer application
            courses, providing a well-rounded education.
          </p>
        </div>
        <div className="card">
          <h2>Program Highlights</h2>
          <ul>
            <li>
              <span>Comprehensive Curriculum:</span> Our program offers a
              comprehensive curriculum covering a wide range of commerce and
              computer application topics.
            </li>
            <li>
              <span>Expert Faculty:</span> Learn from experienced professors and
              industry experts who are passionate about commerce and technology.
            </li>
            <li>
              <span>Practical Learning:</span> Gain hands-on experience with the
              latest software and tools used in the field.
            </li>
          </ul>
        </div>
        <div className="card">
          <h2>Admission Requirements</h2>
          <ul>
            <li>
              <span>Academic Excellence:</span> Candidates must have completed
              10+2 (or equivalent) with a strong academic record.
            </li>
            <li>
              <span>Entrance Examination:</span> Admission may be granted based
              on merit or through an entrance examination.
            </li>
            <li>
              <span>Interview:</span> Some institutions may require a personal
              interview as part of the admission process.
            </li>
          </ul>
        </div>
        <div className="card">
          <h2>Fees</h2>
          <p>
            The total fees for the Bachelor of Commerce (Computer Application)
            program are subject to change and may vary. For the most accurate
            and up-to-date fee information, please contact our admissions
            office.
          </p>
        </div>
        <div className="card">
          <h2>Career Opportunities</h2>
          <p>
            A degree in Bachelor of Commerce with a specialization in Computer
            Application opens doors to various career options, including:
          </p>
          <ul>
            <li>Software Developer</li>
            <li>Financial Analyst</li>
            <li>Accountant</li>
            <li>Business Analyst</li>
            <li>System Analyst</li>
            <li>E-commerce Manager</li>
            <li>Database Administrator</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BComComputerApplication;
