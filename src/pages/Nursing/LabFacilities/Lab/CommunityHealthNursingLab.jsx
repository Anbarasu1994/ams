import React from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import PharmaceuticalBiotech from "../../../../assets/arst_physicslab1.jpg";
import Resource from "../../../../assets/arts_physicslab_modernEquipment.png";
import Research from "../../../../assets/arts_lab_faculty.png";
import Mentor from "../../../../assets/arts_hands on learning.png";
import Intern from "../../../../assets/arst_safetyprotocols.png";
import Community_Nursing_Lab from "../../../../assets/Nursing-clg/commmunity_nursing_lab.jpg"
import "./NursingLab.scss";
function CommunityHealthNursingLab() {
    return (
        <div className="Nurising_lab1">
          <div className="Nurising_lab1-Container">
            <div className="nursing_department1">
            <h2>Community Health Nursing Lab</h2>
              <Carousel
                showArrows={true}
                showThumbs={false}
                autoPlay={true}
                interval={5000}
              >
                <div>
                  <img
                    src={ Community_Nursing_Lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
                <div>
                  <img
                    src={ Community_Nursing_Lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
                <div>
                  <img
                    src={ Community_Nursing_Lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
              </Carousel>
              <p>
            Welcome to our Community Health Nursing Lab, a specialized area dedicated to understanding and applying nursing practices within the community. Here, students explore community healthcare practices, preventive care, and public health strategies.
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
            <h2>Practical Community Health</h2>
            <br />
            <p>
              Equipped with modern healthcare tools, our lab empowers students to practice community-based healthcare services, focusing on disease prevention and health promotion.
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
            <h2>Engagement and Outreach</h2>
            <p>
              Students engage in community outreach programs, conducting health assessments, and providing essential healthcare services to diverse populations.
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
              Under the guidance of experienced mentors, students develop skills in community health assessment and intervention strategies.
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
            <h2>Focus on Public Health</h2>
            <p>
              Our lab emphasizes public health initiatives, emphasizing the significance of community healthcare in preventing diseases and improving overall health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityHealthNursingLab;
  
