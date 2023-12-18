import React from "react";
import MSMathematicsImage from "../../../../../../assets/PG-SCI/3.jpg"; // Import your program's image
import "./PG_Prog_desc.scss"; // Import your program's SCSS file

function MSMathematics() {
  return (
    <div className="programs-container-arts-ug">
      <div className="program-header">
        <h1>Master of Science in Mathematics</h1>
        <img src={MSMathematicsImage} alt="MS Mathematics" />
        </div>
      <div className="program-details">
        <div className="card">
          <h2>Program Details</h2>
        <p>
          Embark on an advanced journey into the realm of Mathematics with our
          Master of Science in Mathematics program. This 3-year postgraduate
          course provides a profound study of mathematical theories and their
          applications in various fields.
        </p>
        </div>
        <div className="card">
        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Advanced Mathematical Studies:</span> Dive deep into various
            mathematical theories and concepts.
          </li>
          <li>
            <span>Research Opportunities:</span> Engage in research projects and
            mathematical problem-solving.
          </li>
          <li>
            <span>Experienced Faculty:</span> Learn from experienced faculty
            members passionate about mathematics.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Duration</h2>
        <p>
          The Master of Science in Mathematics is a 3-year postgraduate program
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
          Graduates of the MS Mathematics program have diverse career
          opportunities, including:
        </p>
        <ul>
          <li>Research and Development</li>
          <li>Academia and Teaching</li>
          <li>Actuarial Science</li>
          <li>Data Analysis and Statistics</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default MSMathematics;
