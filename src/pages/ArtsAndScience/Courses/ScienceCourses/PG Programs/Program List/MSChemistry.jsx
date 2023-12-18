import React from "react";
import MSChemistryImage from "../../../../../../assets/PG-SCI/1.jpg"; // Import your program's image
import "./PG_Prog_desc.scss"; // Import your program's SCSS file

function MSChemistry() {
  return (
    <div className="programs-container-arts-ug">
    <div className="program-header">
        <h1>Master of Science in Chemistry</h1>
        <img src={MSChemistryImage} alt="MS Chemistry" />
        </div>
      <div className="program-details">
        <div className="card">
        <h2>Program Details</h2>

        <p>
          Gain advanced knowledge and expertise in the field of Chemistry with
          our Master of Science in Chemistry program. This 3-year postgraduate
          course provides in-depth study in various branches of chemistry and
          equips you for a successful career in research, academia, and industry.
        </p>
        </div>
        <div className="card">
        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Advanced Chemistry Studies:</span> Explore diverse areas of
            chemistry, including organic, inorganic, and physical chemistry.
          </li>
          <li>
            <span>Research Opportunities:</span> Engage in research projects and
            practical laboratory work.
          </li>
          <li>
            <span>Academic Excellence:</span> Learn from experienced faculty
            members dedicated to academic excellence.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Duration</h2>
        <p>The Master of Science in Chemistry is a 3-year postgraduate program
          following a semester pattern.
        </p>
        </div>
        <div className="card">
        <h2>Eligibility</h2>
        <p>
          To be eligible for this program, candidates must have completed their
          respective undergraduate course and have a minimum of 45% marks.
        </p>
        </div>
        <div className="card">
        <h2>Career Opportunities</h2>
        <p>
          Graduates of the MS Chemistry program have diverse career opportunities,
          including:
        </p>
        <ul>
          <li>Research and Development</li>
          <li>Teaching and Academia</li>
          <li>Chemical Analysis</li>
          <li>Quality Control</li>
          <li>Chemical Manufacturing</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default MSChemistry;
