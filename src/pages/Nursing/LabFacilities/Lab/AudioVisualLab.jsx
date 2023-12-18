import React from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import PharmaceuticalBiotech from "../../../../assets/arst_physicslab1.jpg";
import Resource from "../../../../assets/arts_physicslab_modernEquipment.png";
import Research from "../../../../assets/arts_lab_faculty.png";
import Mentor from "../../../../assets/arts_hands on learning.png";
import Intern from "../../../../assets/arst_safetyprotocols.png";
import "./NursingLab.scss";
import Audio_visual_lab from "../../../../assets/Nursing-clg/audio_visual_lab.jpeg"
function AudioVisualLab() {
    return (
        <div className="Nurising_lab1">
          <div className="Nurising_lab1-Container">
            <div className="nursing_department1">
            <h2>Audio Visual Lab</h2>
              <Carousel
                showArrows={true}
                showThumbs={false}
                autoPlay={true}
                interval={5000}
              >
                <div>
                  <img
                    src={Audio_visual_lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
                <div>
                  <img
                    src={Audio_visual_lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
                <div>
                  <img
                    src={Audio_visual_lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
              </Carousel>
              <p>
            Welcome to our Audio Visual Lab, a space dedicated to the exploration and application of multimedia technologies in education and healthcare. This lab focuses on utilizing audio-visual aids to enhance learning experiences for medical professionals.
          </p>
        </div>
        <br />
        <div className="Resource">
          <div className="Resourceimage">
            <img
              src={Resource}
              alt="Resource"
              width={200}
              height={200}
            />
          </div>
          <div className="ResourceInfo">
            <h2>Advanced Multimedia Tools</h2>
            <br />
            <p>
              Equipped with cutting-edge audio-visual tools, our lab offers a platform for students to create and understand medical content through multimedia technology.
            </p>
          </div>
        </div>
        <br />
        <div className="Research">
          <div className="Researchimage">
            <img
              src={Research}
              alt="Research"
              width={200}
              height={200}
            />
          </div>
          <div className="ResearchInfo">
            <h2>Visual Learning Strategies</h2>
            <p>
              Students explore various visual learning strategies, understanding how multimedia aids can effectively communicate complex medical information.
            </p>
          </div>
        </div>
        <br />
        <div className="Mentor">
          <div className="mentorimage">
            <img
              src={Mentor}
              alt="Mentor"
              width={200}
              height={200}
            />
          </div>
          <div className="Mentorinfo">
            <h2>Guidance from Experts</h2>
            <p>
              With guidance from our experts, students learn to utilize audio-visual resources for educational and clinical purposes.
            </p>
          </div>
        </div>
        <br />
        <div className="Intern">
          <div className="internimage">
            <img
              src={Intern}
              alt="Intern"
              width={200}
              height={200}
            />
          </div>
          <div className="interninfo">
            <h2>Hands-on Learning</h2>
            <p>
              Hands-on experiences in the lab allow students to create and present medical content using multimedia tools, fostering a deeper understanding of the subject matter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioVisualLab;
