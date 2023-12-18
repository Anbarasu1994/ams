import React from "react";
import "../../ArtsAndScience/About/About.scss";
import Artsbg from "../../../../src/assets/ArtsandScience1.jpg";
import { Element } from 'react-scroll'

function About() {
  return (
    <Element id="about" className="ArtsMain">
      <div className="Artsmain">
        <div className="image">
          <img src={Artsbg} alt="" />
        </div>
        <div className="text-container">
        <h2 class="custom-underline">ABOUT US</h2><br/><br />


          <p>
            Annai College of Arts and Science was founded in the year 20XX under
            the patronage of the Annai Educational Trust. The college's mission
            is to offer a wide range of undergraduate and postgraduate programs
            to empower students in their pursuit of knowledge and careers. Our
            institution is affiliated with a reputable university and holds
            recognition from the Government of Tamil Nadu. We provide a
            conducive learning environment with state-of-the-art infrastructure,
            ensuring students receive a high-quality education in a clean and
            comfortable setting. At Annai College of Arts and Science, we are
            committed to fostering academic excellence, promoting creativity,
            and nurturing young minds to excel in their chosen fields. Our
            dedicated faculty, comprehensive curriculum, and commitment to
            providing the best education ensure that students are well-prepared
            for future success.
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
