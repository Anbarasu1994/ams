import React from "react";
import MathematicsImage from "../../../../../../assets/UG-SCIENCE/4.jpg"; // Import your program's image
import "./UG_Prog_desc.scss"; // Import your program's SCSS file

function BScMathematics() {
  return (
    <div className="programs-container-arts-ug">
    <div className="program-header">
        <h1>Bachelor of Science in Mathematics</h1>
        <img src={MathematicsImage} alt="BSc Mathematics" />
        </div>
      <div className="program-details">
        <div className="card">
        <p>
          Delve into the world of numbers, equations, and mathematical theories
          with our Bachelor of Science in Mathematics program. This 3-year
          course follows a semester pattern and equips students with a deep
          understanding of mathematical concepts and their practical
          applications.
        </p>
        </div>
        <div className="card">
        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Comprehensive Curriculum:</span> Study a wide range of
            mathematical topics, including calculus, algebra, statistics, and
            more.
          </li>
          <li>
            <span>Practical Applications:</span> Explore how mathematical
            concepts are applied in various fields, such as finance, science,
            and engineering.
          </li>
          <li>
            <span>Problem-Solving Skills:</span> Develop strong analytical and
            problem-solving skills.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Duration</h2>
        <p>The Bachelor of Science in Mathematics is a 3-year program following a semester pattern.</p>

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
            <span>Mathematics Background:</span> The candidate should have
            studied Mathematics in 10+2.
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
          A degree in BSc Mathematics opens up various career opportunities in
          fields such as:
        </p>
        <ul>
          <li>Mathematician</li>
          <li>Actuary</li>
          <li>Statistician</li>
          <li>Data Analyst</li>
          <li>Financial Analyst</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default BScMathematics;
