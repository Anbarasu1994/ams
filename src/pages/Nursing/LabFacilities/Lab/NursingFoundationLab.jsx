import React from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import Nursing_foundation_lab from "../../../../assets/Nursing-clg/Nursing _foundation_lab.jpg";
import Resource from "../../../../assets/arts_physicslab_modernEquipment.png";
import Research from "../../../../assets/arts_lab_faculty.png";
import Mentor from "../../../../assets/arts_hands on learning.png";
import Intern from "../../../../assets/arst_safetyprotocols.png";
import "./NursingLab.scss";
function NursingFoundationLab() {
    return (
        <div className="Nurising_lab1">
          <div className="Nurising_lab1-Container">
            <div className="nursing_department1">
            <h2>Nursing Foundation Lab</h2>
              <Carousel
                showArrows={true}
                showThumbs={false}
                autoPlay={true}
                interval={5000}
              >
                <div>
                  <img
                    src={ Nursing_foundation_lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
                <div>
                  <img
                    src={ Nursing_foundation_lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
                <div>
                  <img
                    src={ Nursing_foundation_lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
              </Carousel>
              <p>
            Welcome to our Nursing Foundation Lab, the bedrock of our nursing education. This lab serves as the initial hands-on experience for students, fostering foundational nursing skills and knowledge required for future clinical practice.
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
            <h2>Essential Learning Tools</h2>
            <br />
            <p>
              Equipped with standard nursing apparatus and tools, our lab facilitates learning in fundamental nursing procedures such as basic patient care, health assessment, and nursing documentation.
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
            <h2>Faculty Mentorship</h2>
            <p>
              Under the guidance of experienced faculty, students learn nursing protocols, gain understanding in patient care plans, and develop skills crucial in clinical settings.
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
            <h2>Interactive Learning Experience</h2>
            <p>
              The lab provides an interactive learning approach, offering students simulated patient interaction scenarios to enhance their communication skills and understanding of patient needs.
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
            <h2>Priority on Safety Practices</h2>
            <p>
              Safety guidelines and protocols are rigorously maintained in the lab to ensure a secure learning environment for students as they practice and train in nursing procedures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NursingFoundationLab;
  
