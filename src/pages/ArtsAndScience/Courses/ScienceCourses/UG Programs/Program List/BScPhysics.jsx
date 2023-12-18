import React from "react";
import PhysicsImage from "../../../../../../assets/UG-SCIENCE/3.jpg"; // Import your program's image
import "./UG_Prog_desc.scss"; // Import your program's SCSS file

function BScPhysics() {
  return (
    <div className="programs-container-arts-ug">
    <div className="program-header">
        <h1>Bachelor of Science in Physics</h1>
        
        <img src={PhysicsImage} alt="BSc Physics" />
        </div>
      <div className="program-details">
        <div className="card">
          <h2>Program Details</h2>
        <p>

          Embark on a journey to understand the fundamental laws that govern the
          universe with our Bachelor of Science in Physics program. This 3-year
          course follows a semester pattern and provides a comprehensive
          education in the field of physics.
        </p>
        </div>
        <div className="card">
        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Comprehensive Curriculum:</span> Explore classical and modern
            physics, including mechanics, electromagnetism, quantum mechanics,
            and more.
          </li>
          <li>
            <span>Laboratory Work:</span> Engage in hands-on experiments and
            research in well-equipped physics laboratories.
          </li>
          <li>
            <span>Practical Applications:</span> Gain insights into the
            practical applications of physics in various industries.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Duration</h2>
        <p>The Bachelor of Science in Physics is a 3-year program following a semester pattern.</p>
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
            <span>Science Background:</span> The candidate should have studied
            Physics in 10+2.
          </li>
          <li>
            <span>Additional Subject:</span> Studied either Mathematics or
            Chemistry in 10+2.
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
          A degree in BSc Physics opens up various career opportunities in
          fields such as:
        </p>
        <ul>
          <li>Physicist</li>
          <li>Research Scientist</li>
          <li>Physics Educator</li>
          <li>Scientific Consultant</li>
          <li>Environmental Analyst</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default BScPhysics;
