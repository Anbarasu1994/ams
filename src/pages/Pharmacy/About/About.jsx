import React from "react";
import "../../Pharmacy/About/About.scss";
import Pharmbg from "../../../../src/assets/pharmbg.jpg";

function About() {
  return (
    <div id="about" className="PharmMain">
      <div className="Pharmacymain">
        <div className="image">
          <img
            src={Pharmbg}
            alt=""
           
          />
        </div>
        <div className="text-container">
          <h2>ABOUT US</h2>

          <p>
            The Annail College of Pharmacy was established in the year 2023
            under the – Annai Educational Trust with a view to provide job
            oriented professional courses in Pharmacy. The College is recognized
            by the Government of Tamil Nadu and affiliated with The Tamil Nadu
            Dr. MGR Medical University, Chennai, approved by the Pharmacy
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
