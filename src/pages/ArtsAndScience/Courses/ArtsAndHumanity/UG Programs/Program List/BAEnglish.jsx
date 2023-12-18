import React from "react";
import BAEnglishImage from "../../../../../../assets/UG-ARTS/1.webp";
import "./UG_Prog_desc.scss";

function BAEnglish() {
  return (
    <div className="programs-container-arts-ug">
      <div className="program-header">
        <h1>Bachelor of Arts in English</h1>
        <img src={BAEnglishImage} alt="BA English" />
      </div>
      <div className="program-details">
        <div className="card">
          <h2>Program Details</h2>
          <p>
            Explore the world of literature and language with our Bachelor of
            Arts in English program. This 3-year full-time course delves into
            the rich history of English literature, enhancing your language
            skills, nurturing your creativity, and honing your critical thinking
            abilities.
          </p>
        </div>
        <div className="card">
          <h2>Program Highlights</h2>
          <ul>
            <li>
              Comprehensive Curriculum: Discover a diverse range of literary
              works and enhance your knowledge.
            </li>
            <li>
              Expert Faculty: Learn from experienced professors passionate about
              literature and language.
            </li>
            <li>
              Language Proficiency: Improve your written and spoken English
              skills.
            </li>
            <li>
              Analytical Skills: Develop critical thinking and analytical
              abilities valued in various careers.
            </li>
          </ul>
        </div>
        <div className="card">
          <h2>Admission Requirements</h2>
          <ul>
            <li>
              Academic Excellence: Candidates must have completed 10+2 (or
              equivalent) from a recognized board.
            </li>
            <li>
              Passion for Language: A love for language, literature, and a
              curious mind are essential.
            </li>
            <li>
              Entrance Examination: Admission is granted based on merit or
              through an entrance examination.
            </li>
          </ul>
        </div>
        <div className="card">
          <h2>Fees</h2>
          <p>
            The total fees for the Bachelor of Arts in English program are
            subject to change and may vary. For the most accurate and up-to-date
            fee information, please contact our admissions office.
          </p>
        </div>
        <div className="card">
          <h2>Career Opportunities</h2>
          <p>
            A degree in BA English opens doors to various career options,
            including content writing, editing, teaching, journalism, and public
            relations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BAEnglish;
