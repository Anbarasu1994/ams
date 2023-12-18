import React from "react";
import MSPhysicsImage from "../../../../../../assets/PG-SCI/2.jpg"; // Import your program's image
import "./PG_Prog_desc.scss"; // Import your program's SCSS file

function MSPhysics() {
  return (
    <div className="programs-container-arts-ug">
    <div className="program-header">
        <h1>Master of Science in Physics</h1>
        <img src={MSPhysicsImage} alt="MS Physics" />
        </div>
      <div className="program-details">
        <div className="card">
          <h2>Program Details</h2>
        <p>
          Dive deep into the world of Physics with our Master of Science in
          Physics program. This 3-year postgraduate course offers a comprehensive
          study of various branches of physics, providing advanced knowledge and
          research opportunities.
        </p>
        </div>
        <div className="card">
        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Advanced Physics Studies:</span> Explore topics in theoretical
            and experimental physics.
          </li>
          <li>
            <span>Research Opportunities:</span> Engage in research projects and
            practical experiments.
          </li>
          <li>
            <span>Experienced Faculty:</span> Learn from faculty members with
            expertise in the field of Physics.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Duration</h2>
        <p>
          The Master of Science in Physics is a 3-year postgraduate program
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
          Graduates of the MS Physics program have diverse career opportunities,
          including:
        </p>
        <ul>
          <li>Research and Development</li>
          <li>Academia and Teaching</li>
          <li>Experimental Physics</li>
          <li>Theoretical Physics</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default MSPhysics;
