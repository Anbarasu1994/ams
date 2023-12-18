import React from "react";
import ChemistryImage from "../../../../../../assets/UG-SCIENCE/2.jpg"; // Import your program's image
import "./UG_Prog_desc.scss"; // Import your program's SCSS file

function BScChemistry() {
  return (
    <div className="programs-container-arts-ug">

<div className="program-header">

        <h1>Bachelor of Science in Chemistry</h1>
        <img src={ChemistryImage} alt="BSc Chemistry" />
            </div>
      <div className="program-details">
      <div className="card">
      <h2>Program Details</h2>

        <p>
          Immerse yourself in the fascinating world of chemistry with our
          Bachelor of Science in Chemistry program. This 3-year course follows a
          semester pattern and offers a comprehensive understanding of
          chemistry, including physical, organic, and inorganic chemistry.
        </p>
        </div>
        <div className="card">
        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Comprehensive Curriculum:</span> Our program covers various
            branches of chemistry, allowing you to explore and specialize in
            areas of interest.
          </li>
          <li>
            <span>Laboratory Work:</span> Engage in hands-on experiments and
            research projects in well-equipped laboratories.
          </li>
          <li>
            <span>Practical Applications:</span> Gain insights into the
            practical applications of chemistry in various industries.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Duration</h2>
        <p>The Bachelor of Science in Chemistry is a 3-year program.</p>
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
            <span>Science Background:</span> Chemistry and Physics must be two
            of the subjects studied in 10+2.
          </li>
          <li>
            <span>Additional Subject:</span> The candidate should have studied
            any one of the following subjects in 10+2: Mathematics, Botany,
            Zoology, or Biology.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Admission Requirements</h2>
        <ul>
          <li>
            <span>Academic Excellence:</span> Candidates must have achieved
            high academic scores in their 10+2 examinations.
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
          A degree in BSc Chemistry opens up various career opportunities in
          fields such as:
        </p>
        <ul>
          <li>Chemist</li>
          <li>Pharmaceutical Researcher</li>
          <li>Chemical Analyst</li>
          <li>Quality Control Specialist</li>
          <li>Science Educator</li>
          <li>Environmental Chemist</li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default BScChemistry;
