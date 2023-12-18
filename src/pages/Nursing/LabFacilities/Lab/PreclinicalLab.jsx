import React from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import PharmaceuticalBiotech from "../../../../assets/arst_physicslab1.jpg";
import Resource from "../../../../assets/arts_physicslab_modernEquipment.png";
import Research from "../../../../assets/arts_lab_faculty.png";
import Mentor from "../../../../assets/arts_hands on learning.png";
import Intern from "../../../../assets/arst_safetyprotocols.png";
import "./NursingLab.scss";
function PreclinicalLab() {
  return (
    <div className="Nurising_lab1">
      <div className="Nurising_lab1-Container">
        <div className="nursing_department1">
          <h2>Preclinical Lab</h2>
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
            Welcome to our Preclinical Lab, a place where future nursing
            professionals learn the fundamental principles through practical
            experiments and hands-on experiences. Our advanced laboratory is
            equipped with modern tools and apparatus, providing students with an
            immersive learning environment.
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
            <h2>State-of-the-Art Equipment</h2>
            <br />
            <p>
              Our lab is furnished with the latest nursing apparatus and
              instruments, allowing students to practice essential skills using
              industry-standard tools.
            </p>
          </div>
        </div>
        <br />
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
            <h2>Expert Guidance</h2>
            <p>
              Our experienced faculty guide students in conducting preclinical
              research, performing analyses, and understanding medical data.
            </p>
          </div>
        </div>
        <br />
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
            <h2>Practical Education</h2>
            <p>
              We emphasize hands-on learning, allowing students to apply their
              theoretical knowledge to real-world scenarios, fostering a deeper
              understanding of preclinical nursing practices.
            </p>
          </div>
        </div>
        <br />
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
            <h2>Safety Measures</h2>
            <p>
              Safety is paramount. We maintain strict protocols and safety
              measures, ensuring a secure learning environment for all students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreclinicalLab;
