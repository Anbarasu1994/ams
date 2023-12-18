import React from "react";
import BATamilImage from "../../../../../../assets/UG-ARTS/2.jpg"; // Import your program's image
import "./UG_Prog_desc.scss"; // Import your program's SCSS file

function BATamil() {
  return (
    <div className="programs-container-arts-ug">
      <div className="program-header">
        <h1>Bachelor of Arts in Tamil</h1>
        <img src={BATamilImage} alt="BA Tamil" />
      </div>
      <div className="program-details">
        <div className="card">
          <h2>Program Details</h2>
          <p>
            Immerse yourself in the rich world of Tamil language and literature
            with our Bachelor of Arts in Tamil program. This 3-year full-time
            course explores the depth of Tamil literature, enhances your
            language skills, and provides insights into the culture, history,
            and literary traditions of Tamil Nadu.
          </p>
        </div>
        <div className="card">
          <h2>Program Highlights</h2>
          <ul>
            <li>
              <span>Extensive Curriculum:</span> Study classical and modern
              Tamil literature, poetry, and cultural studies.
            </li>
            <li>
              <span>Experienced Faculty:</span> Learn from passionate professors
              with expertise in Tamil language and literature.
            </li>
            <li>
              <span>Language Proficiency:</span> Develop fluency in written and
              spoken Tamil.
            </li>
            <li>
              <span>Cultural Awareness:</span> Gain insights into the cultural
              and historical aspects of Tamil Nadu.
            </li>
          </ul>
        </div>
        <div className="card">
          <h2>Admission Requirements</h2>
          <ul>
            <li>
              <span>Educational Qualifications:</span> Candidates should have
              completed 10+2 (or equivalent) with Tamil as a subject.
            </li>
            <li>
              <span>Passion for Tamil:</span> A deep interest in Tamil language
              and literature is essential.
            </li>
            <li>
              <span>Admission Process:</span> Admission is granted based on
              academic merit or an entrance examination.
            </li>
          </ul>
        </div>
        <div className="card">
          <h2>Fees</h2>
          <p>
            The total fees for the Bachelor of Arts in Tamil program are subject
            to change and may vary. For the most accurate and up-to-date fee
            information, please contact our admissions office.
          </p>
        </div>
        <div className="card">
          <h2>Career Opportunities</h2>
          <p>
            Graduates of BA Tamil can pursue various career paths, including
            teaching, translation, journalism, content writing, and working in
            the cultural sector.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BATamil;
