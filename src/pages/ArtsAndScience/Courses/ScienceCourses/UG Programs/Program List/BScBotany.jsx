import React from "react";
import BotanyImage from "../../../../../../assets/UG-SCIENCE/1.jpg"; // Import your program's image
import "./UG_Prog_desc.scss"; // Import your program's SCSS file

function BScBotany() {
  return (
    <div className="programs-container-arts-ug">
      <div className="program-header">
        <h1>Bachelor of Science in Botany</h1>
        <img src={BotanyImage} alt="BSc Botany" />
      </div>
      <div className="program-details">
        <div className="card">
        <h2>Program Details</h2>

        <p>
          Dive into the world of plant biology and explore the wonders of nature
          with our Bachelor of Science in Botany program. This 3-year course
          follows a semester pattern and offers a deep understanding of plant
          life, ecosystems, and environmental science.
        </p>
      </div>
      <div className="card">
        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Comprehensive Curriculum:</span> Our program covers various
            aspects of botany, including plant physiology, taxonomy, ecology,
            and more.
          </li>
          <li>
            <span>Laboratory Work:</span> Engage in hands-on laboratory
            experiments and research projects.
          </li>
          <li>
            <span>Field Studies:</span> Explore the natural world through
            fieldwork and gain practical experience.
          </li>
        </ul>
      </div>
      <div className="card">
        <h2>Duration</h2>
        <p>The Bachelor of Science in Botany is a 3-year program.</p>
        </div>
        <div className="card">
        <h2>Eligibility</h2>
        <p>To be eligible for this program, a candidate must have:</p>
        <ul>
          <li>
            <span>Passed 10+2:</span> Completed 10+2 or its equivalent with
            passing grades in all subjects.
          </li>
          <li>
            <span>Science Background:</span> Biology along with Chemistry must
            be one of the subjects studied in 10+2.
          </li>
        </ul>
      </div>
      <div className="card">
        <h2>Admission Requirements</h2>
        <ul>
          <li>
            <span>Academic Excellence:</span> Candidates must have achieved high
            academic scores in their 10+2 examinations.
          </li>
          <li>
            <span>Entrance Examination:</span> Admission may be granted based on
            the performance in an entrance examination.
          </li>
        </ul>
      </div>
      <div className="card">
        <h2>Career Opportunities</h2>
        <p>
          A degree in BSc Botany opens up diverse career opportunities in fields
          such as:
        </p>
        <ul>
          <li>Botanist</li>
          <li>Plant Biotechnologist</li>
          <li>Ecologist</li>
          <li>Environmental Consultant</li>
          <li>Science Educator</li>
          <li>Conservationist</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default BScBotany;
