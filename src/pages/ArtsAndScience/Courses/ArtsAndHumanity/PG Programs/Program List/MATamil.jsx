import React from "react";
import MATamilImage from "../../../../../../assets/PG-ARTS/1.jpg"; // Import your program's image
import "../../UG Programs/Program List/UG_Prog_desc.scss"; // Import your program's SCSS file

function MATamil() {
  return (
    <div className="programs-container-arts-ug">
      <div className="program-header">
        <h1>Master of Arts in Tamil</h1>
        <img src={MATamilImage} alt="MA Tamil" />
        </div>
      <div className="program-details">
        <div className="card">
        <h2>Program details</h2>

        <p>
          Immerse yourself in the rich literary traditions and cultural heritage
          of Tamil with our Master of Arts in Tamil program. This 2-year
          postgraduate program offers advanced study in Tamil literature,
          linguistics, and culture, allowing you to explore the depths of one
          of the world's ancient languages.
        </p>
        </div>
        <div className="card">
        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Advanced Study:</span> Delve deep into classical and modern
            Tamil literature.
          </li>
          <li>
            <span>Cultural Exploration:</span> Explore the cultural and
            linguistic diversity of Tamil Nadu.
          </li>
          <li>
            <span>Research Opportunities:</span> Engage in research and
            critical analysis of Tamil texts.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Duration</h2>
        <p>The Master of Arts in Tamil is a 2-year postgraduate program.</p>
        </div>
        <div className="card">
        <h2>Eligibility</h2>
        <p>
          To be eligible for this program, a candidate must have a bachelor's
          degree in Tamil or a related field from a recognized institution.
        </p>
        </div>
        <div className="card">
        <h2>Admission Requirements</h2>
        <ul>
          <li>
            <span>Academic Excellence:</span> Candidates with a strong academic
            background are preferred.
          </li>
          <li>
            <span>Entrance Examination:</span> Admission may be based on
            performance in an entrance examination.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Career Opportunities</h2>
        <p>
          Graduates of the MA Tamil program can pursue various career paths,
          including:
        </p>
        <ul>
          <li>Teaching</li>
          <li>Translation and Interpretation</li>
          <li>Content Writing</li>
          <li>Research and Academia</li>
          <li>Cultural Organizations</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default MATamil;
