import React from "react";
import ComputerScienceImage from "../../../../../../assets/UG-SCIENCE/5.jpeg"; // Import your program's image
import "./UG_Prog_desc.scss"; // Import your program's SCSS file

function BScComputerScience() {
  return (
    <div className="programs-container-arts-ug">
    <div className="program-header">
        <h1>Bachelor of Science in Computer Sciences</h1>
        <img src={ComputerScienceImage} alt="BSc Computer Science" />
        </div>
      <div className="program-details">
        <div className="card">
        <p>
          Embark on a journey into the world of computer science with our
          Bachelor of Science in Computer Sciences program. This 3-year program,
          following a semester pattern, provides students with a strong
          foundation in computer science, programming, and problem-solving.
        </p>
        </div>
        <div className="card">
        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Comprehensive Curriculum:</span> Study a wide range of
            computer science topics, including programming languages, data
            structures, and algorithms.
          </li>
          <li>
            <span>Practical Learning:</span> Gain hands-on experience through
            lab work and real-world projects.
          </li>
          <li>
            <span>Problem-Solving Skills:</span> Develop strong analytical and
            problem-solving abilities.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Duration</h2>
        <p>The Bachelor of Science in Computer Sciences is a 3-year program following a semester pattern.</p>
        </div>
        <div className="card">
        <h2>Eligibility</h2>
        <p>
          To be eligible for this program, a candidate must have:
        </p>
        <ul>
          <li>
            <span>Passed 10+2:</span> Successfully completed 10+2 or its
            equivalent with passing grades in all subjects.
          </li>
          <li>
            <span>Mathematics and Computer Science Background:</span> The
            candidate should have studied both Mathematics and Computer Science
            in 10+2.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Admission Requirements</h2>
        <ul>
          <li>
            <span>Academic Excellence:</span> Candidates with a strong academic
            background are preferred.
          </li>
          <li>
            <span>Entrance Examination:</span> Admission may be based on the
            performance in an entrance examination.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Career Opportunities</h2>
        <p>
          A degree in BSc Computer Sciences opens up various career opportunities
          in fields such as:
        </p>
        <ul>
          <li>Software Developer</li>
          <li>Database Administrator</li>
          <li>Systems Analyst</li>
          <li>Network Administrator</li>
          <li>Web Developer</li>
        </ul>
      </div>
    </div>
    </div>

  );
}

export default BScComputerScience;
