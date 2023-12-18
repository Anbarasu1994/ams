import React from "react";
import BAHistoryImage from "../../../../../../assets/UG-ARTS/4.jpg"; // Import your program's image
import "./UG_Prog_desc.scss"; // Import your program's SCSS file

function BAHistory() {
  return (
    <div className="programs-container-arts-ug">
           <div className="program-header">

        <h1>Bachelor of Arts in History</h1>
        <img src={BAHistoryImage} alt="BA History" />
      </div>
      <div className="program-details">
        <div className="card">
        <h2>Program Details</h2>

        <p>
          Immerse yourself in the past and explore the fascinating world of
          history with our Bachelor of Arts in History program. This 3-year
          full-time course takes you on a journey through different eras,
          civilizations, and historical events, enabling you to understand the
          complexities of human history.
        </p>
        </div>
        <div className="card">
        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Comprehensive Curriculum:</span> Our program covers a wide
            range of historical periods and regions, providing a comprehensive
            understanding of history.
          </li>
          <li>
            <span>Experienced Faculty:</span> Learn from dedicated historians
            and scholars passionate about the past.
          </li>
          <li>
            <span>Research Opportunities:</span> Engage in historical research
            projects and gain practical experience.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Admission Requirements</h2>
        <ul>
          <li>
            <span>Academic Qualifications:</span> Candidates must have completed
            10+2 (or equivalent) with a strong academic background.
          </li>
          <li>
            <span>Entrance Examination:</span> Admission may be based on merit
            or through a competitive entrance examination.
          </li>
          <li>
            <span>Interview:</span> Some institutions may conduct a personal
            interview as part of the admission process.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Fees</h2>
        <p>
          The total fees for the Bachelor of Arts in History program may vary
          depending on the institution. It is advisable to contact the
          admissions office for the most accurate and up-to-date fee
          information.
        </p>
        </div>
        <div className="card">
        <h2>Career Opportunities</h2>
        <p>
          A degree in BA History opens doors to a wide range of career
          opportunities, including:
        </p>
        <ul>
          <li>Historian</li>
          <li>Archivist</li>
          <li>Researcher</li>
          <li>Teacher or Professor</li>
          <li>Museum Curator</li>
          <li>Historical Consultant</li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default BAHistory;
