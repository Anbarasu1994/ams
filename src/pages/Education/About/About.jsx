import React from "react";
import "./About.scss";
import Edubg from "../../../../src/assets/ArtsandScience1.jpg";

function About() {
  return (
    <div id="about" className="EduMain">
      <div className="Educationmain">
        <div className="image">
          <img
            src={Edubg}
            alt=""
           
          />
        </div>
        <div className="text-container">
          <h2>ABOUT US</h2>

          <p>
            The Annail College of Education was established in the year 2023
            under the – Annai Educational Trust with a view to provide job
            oriented professional courses in Education. The College is recognized
            by the Government of Tamil Nadu and affiliated with The Tamil Nadu
            Dr. MGR Medical University, Chennai, approved by the Education
            Council of India (PCI), New Delhi. The infrastructure available
            makes the college a conducive place for academic learning that
            provides students with quality education in a clean, comfortable
            environment.
            <br />
            <br />
            <button>EXPLORE ACADEMICS AT AMS</button>
          </p>

          <h1>15:1</h1>
          <h3>Student-to-faculty Ratio</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
