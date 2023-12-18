import React from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import Resource from "../../../../assets/arts_physicslab_modernEquipment.png";
import Research from "../../../../assets/arts_lab_faculty.png";
import Mentor from "../../../../assets/arts_hands on learning.png";
import Intern from "../../../../assets/arst_safetyprotocols.png";
import Ad_clinical_lab from "../../../../assets/Nursing-clg/Advanced_clcinical_lab.jpg";
import "./NursingLab.scss";
function AdvancedClinicalLab() {
    return (
        <div className="Nurising_lab1">
          <div className="Nurising_lab1-Container">
            <div className="nursing_department1">
            <h2>Advanced Clinical Lab</h2>
              <Carousel
                showArrows={true}
                showThumbs={false}
                autoPlay={true}
                interval={5000}
              >
                <div>
                  <img
                    src={Ad_clinical_lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
                <div>
                  <img
                    src={Ad_clinical_lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
                <div>
                  <img
                    src={Ad_clinical_lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
              </Carousel>
              <p>
            Welcome to our Advanced Clinical Lab, an innovative space dedicated to developing advanced nursing competencies. Here, students engage in complex patient scenarios and hands-on training, simulating real healthcare environments.
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
            <h2>State-of-the-Art Tools</h2>
            <br />
            <p>
              Equipped with cutting-edge medical equipment, students engage in advanced medical procedures, diagnostic practices, and treatment techniques.
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
            <h2>Realistic Simulations</h2>
            <p>
              Under expert guidance, students delve into high-fidelity simulations and case studies, refining critical thinking and decision-making skills essential for complex healthcare scenarios.
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
            <h2>Comprehensive Learning</h2>
            <p>
              Engage in comprehensive patient care scenarios, interdisciplinary teamwork, and advanced nursing interventions.
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
            <h2>Focus on Ethics & Safety</h2>
            <p>
              Emphasizing ethical standards and patient safety, our lab instills a strong sense of responsible and safe clinical practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvancedClinicalLab;