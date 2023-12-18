import React from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import PharmaceuticalBiotech from "../../../../assets/arst_physicslab1.jpg";
import Resource from "../../../../assets/arts_physicslab_modernEquipment.png";
import Research from "../../../../assets/arts_lab_faculty.png";
import Mentor from "../../../../assets/arts_hands on learning.png";
import Intern from "../../../../assets/arst_safetyprotocols.png";
import Computer_lab from "../../../../assets/Nursing-clg/computer_lab.jpg"
import "./NursingLab.scss";
function ComputerLab() {
    return (
        <div className="Nurising_lab1">
          <div className="Nurising_lab1-Container">
            <div className="nursing_department1">
            <h2>Computer Lab</h2>
              <Carousel
                showArrows={true}
                showThumbs={false}
                autoPlay={true}
                interval={5000}
              >
                <div>
                  <img
                    src={Computer_lab }
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
                <div>
                  <img
                    src={Computer_lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
                <div>
                  <img
                    src={Computer_lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
              </Carousel>
              <p>
            Welcome to the Computer Lab at our nursing college. This lab is an essential nexus where nursing and technology converge, empowering students with digital tools and resources to enhance their understanding and application of nursing principles within a technological framework.
          </p>
        </div>
        <br />
        <div className="Resource">
          <div className="ResourceImage">
            <img src={Resource} alt="Resource" width={200} height={200} />
          </div>
          <div className="ResourceInfo">
            <h2>Interactive Learning</h2>
            <br />
            <p>
              Our lab provides an interactive learning environment equipped with modern software and tools tailored for nursing education and practice.
            </p>
          </div>
        </div>
        <br />
        <div className="Research">
          <div className="ResearchImage">
            <img src={Research} alt="Research" width={200} height={200} />
          </div>
          <div className="ResearchInfo">
            <h2>Data Analysis in Nursing</h2>
            <p>
              Students engage in data analysis specifically focused on nursing-related data, honing their analytical skills for healthcare scenarios.
            </p>
          </div>
        </div>
        <br />
        <div className="Mentor">
          <div className="MentorImage">
            <img src={Mentor} alt="Mentor" width={200} height={200} />
          </div>
          <div className="MentorInfo">
            <h2>Faculty Guidance</h2>
            <p>
              Our experienced faculty provide guidance in leveraging technology to address nursing challenges and promote patient care.
            </p>
          </div>
        </div>
        <br />
        <div className="Intern">
          <div className="InternImage">
            <img src={Intern} alt="Intern" width={200} height={200} />
          </div>
          <div className="InternInfo">
            <h2>Practical Application</h2>
            <p>
              The lab emphasizes the practical application of technology in nursing scenarios, fostering a deeper understanding of healthcare technology integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerLab;
  
