import React from "react";
import "../../Nursing/About/About.scss";
import Nursingbg from "../../../../src/assets/Nursing-clg/nursing_about.jpg";
import { Element } from "react-scroll";

function About() {
  return (
    <Element id="about" className="NursingMain">
      <div className="Nursingmain">
        <div className="image">
          <img src={Nursingbg} alt="" />
        </div>
        <div className="text-container">
          <h2 class="custom-underline">ABOUT US</h2>
          <br />
          <br />

          <p>
            Established in the year 2011, we educate the next generation of
            nursing students providing them good quality and affordable
            education. The college is equipped with the latest facilities and
            modern infrastructure, needed for learning practices in the nursing
            profession. A highly qualified faculty and full-fledged laboratories
            for students’ learning are our main strengths. Join us and
            experience the art of learning.
            <br />
            <br />
            <button>EXPLORE ACADEMICS AT AMS</button>
          </p>

          <h1>15:1</h1>
          <h3>Student-to-faculty Ratio</h3>
        </div>
      </div>
    </Element>
  );
}

export default About;
