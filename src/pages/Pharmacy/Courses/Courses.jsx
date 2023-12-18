import React from "react";
import "./Courses.scss";
import pharm from "../../../assets/b.pharm.jpg";

function Courses() {
  return (
    <div className="programs-container-pharmacy">
      <div className="program-header">
        <h1>Bachelor of Pharmacy (B.Pharm)</h1>
        <img src={pharm} alt="Bachelor of Pharmacy" />
      </div>
      <div className="program-details">
        <div className="card">
          <h2>Program Details</h2>
          <ul>
            <li>
              <p>
                Bachelor of Pharmacy is a four-year program that prepares students for a career in the pharmaceutical industry and research.
              </p>
            </li>
            <li>
              <p>
                Students are exposed and trained in:
                <ul>
                  <li>Synthetic and natural chemistry and drugs</li>
                  <li>Formulation development</li>
                  <li>Quality control of drugs and formulations</li>
                  <li>Screening of substances for pharmacological activities</li>
                  <li>Pharmaceutical care process</li>
                </ul>
              </p>
            </li>
            <li>
              <p>
                The students undergo focused training in the ‘Practice School’ held at the college and ‘Industrial Training’ at an identified pharmaceutical industry for a specified period of time.
              </p>
            </li>
          </ul>
        </div>
        <div className="card">
          <h2>Syllabus (From university page)</h2>
          {/* Include Syllabus details here */}
        </div>
        <div className="card">
          <h2>Eligibility</h2>
          <p>
            Candidate shall have passed the 10+2 examination conducted by the respective state/central government authorities recognized as equivalent to the 10+2 examination by the Association of Indian Universities (AIU) with specific subjects. Any other qualification approved by the Pharmacy Council of India as equivalent to any of the above examinations. Age limit is 20 years for reserved category & 22 years for the general category.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Courses;
