import React from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import PharmaceuticalBiotech from "../../../../assets/arst_physicslab1.jpg";
import Resource from "../../../../assets/arts_physicslab_modernEquipment.png";
import Research from "../../../../assets/arts_lab_faculty.png";
import Mentor from "../../../../assets/arts_hands on learning.png";
import Intern from "../../../../assets/arst_safetyprotocols.png";
import "./NursingLab.scss";

function MCHLab() {
    return (
      <div className="Nurising_lab1">
        <div className="Nurising_lab1-Container">
          <div className="nursing_department1">
            <h2>Maternal and Child Health (MCH) Lab</h2>
            <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            interval={5000}
          >
            <div>
              <img
                src={PharmaceuticalBiotech}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
            <div>
              <img
                src={PharmaceuticalBiotech}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
            <div>
              <img
                src={PharmaceuticalBiotech}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
          </Carousel>
            <p>
              Welcome to our Maternal and Child Health (MCH) Lab, a dedicated space
              where nursing students focus on the health and well-being of mothers
              and children. Equipped with advanced tools and apparatus, our lab
              provides an immersive learning environment for exploring the essential
              aspects of maternal and child healthcare.
            </p>
          </div>
          <br />
          <div className="Resource">
            <div className="Resourceimage">
              <img
                src={Resource}
                alt="Resource"
                width={200} // Set a fixed width for this image
                height={200} // Set a fixed height for this image
              />
            </div>
            <div className="ResourceInfo">
            <h2>Specialized Equipment</h2>
            <br />
            <p>
              Our lab is equipped with specialized tools tailored for maternal and child healthcare, including fetal monitoring devices, pediatric care instruments, and resources for prenatal and postnatal care practices. Students gain proficiency in using these tools to provide comprehensive healthcare support.
            </p>
            </div>
          </div>
          <br />
          <div className="Research">
            <div className="Researchimage">
              <img
                src={Research}
                alt="Research"
                width={200} // Set a fixed width for this image
                height={200} // Set a fixed height for this image
              />
            </div>
            <div className="ResearchInfo">
            <h2>Guided Study and Analysis</h2>
            <p>
              Under expert guidance, students conduct in-depth analysis of maternal health trends, child development patterns, and healthcare practices. The lab supports statistical research and examination of data pertinent to maternal and child well-being.
            </p>
            </div>
          </div>
          <br />
          <div className="Mentor">
            <div className="mentorimage">
              <img
                src={Mentor}
                alt="Mentor"
                width={200} // Set a fixed width for this image
                height={200} // Set a fixed height for this image
              />
            </div>
            <div className="Mentorinfo">
            <h2>Hands-on Learning Approach</h2>
            <p>
              The lab emphasizes experiential learning where students engage in scenarios simulating actual maternal and child health situations. This approach fosters a comprehensive understanding of providing effective care in real-world situations.
            </p>
            </div>
          </div>
          <br />
          <div className="Intern">
            <div className="internimage">
              <img
                src={Intern}
                alt="Intern"
                width={200} // Set a fixed width for this image
                height={200} // Set a fixed height for this image
              />
            </div>
            <div className="interninfo">
            <h2>Emphasis on Safety Protocols</h2>
            <p>
              Safety standards within the lab are paramount, ensuring a secure environment for the study and practice of maternal and child health. Strict safety protocols and guidelines are in place for a safe learning experience.
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MCHLab;
  
