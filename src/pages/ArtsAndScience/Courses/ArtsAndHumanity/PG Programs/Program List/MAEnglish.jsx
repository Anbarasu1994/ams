import React from "react";
import MAEnglishImage from "../../../../../../assets/PG-ARTS/2.jpeg"; // Import your program's image
import "../../UG Programs/Program List/UG_Prog_desc.scss"; 

function MAEnglish() {
  return (
    <div className="programs-container-arts-ug">
      <div className="programs-header">
        <h1>Master of Arts in English</h1>
        {/* <img src={MAEnglishImage} alt="MA English" /> */}
        </div>
        <div className="program-details">
        <div className="card">
          <h2>Program Details</h2>
        <p>
          Take your passion for English literature and language to the next level
          with our Master of Arts in English program. This 2-year postgraduate
          course offers advanced study in various literary genres, linguistics,
          and critical theory, enabling you to explore the depths of English
          literature.
        </p>
        </div>
        <div className="card">
        <h2>Program Highlights</h2>
        <ul>
          <li>
            <span>Advanced Literary Exploration:</span> Dive into classical and
            contemporary English literature.
          </li>
          <li>
            <span>Linguistic Analysis:</span> Enhance your language and
            linguistic skills.
          </li>
          <li>
            <span>Critical Theory:</span> Develop a deep understanding of
            literary and critical theories.
          </li>
          <li>
            <span>Research Opportunities:</span> Engage in research and
            academic writing.
          </li>
        </ul>
        </div>
        <div className="card">
        <h2>Duration</h2>
        <p>The Master of Arts in English is a 2-year postgraduate program.</p>
        </div>
        <div className="card">
        <h2>Eligibility</h2>
        <p>
          To be eligible for this program, a candidate must have a bachelor's
          degree in English or a related field from a recognized institution.
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
          Graduates of the MA English program can pursue various career paths,
          including:
        </p>
        <ul>
          <li>Teaching</li>
          <li>Writing and Publishing</li>
          <li>Journalism</li>
          <li>Content Creation</li>
          <li>Research and Academia</li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default MAEnglish;
