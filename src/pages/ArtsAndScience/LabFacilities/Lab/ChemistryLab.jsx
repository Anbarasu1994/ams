import React from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import PharmaceuticalBiotech from "../../../../assets/arst_chemistrylab1.jpg";
import Resource from "../../../../assets/computerequipment.png";
import Research from "../../../../assets/arts_lab_faculty.png";
import Mentor from "../../../../assets/arts_lab_hands on learning.png";
import Intern from "../../../../assets/arst_safetyprotocols.png";
import "./PhysicsLab.scss";
function ChemistryLab() {
  return (
    <div className="Arts_lab1">
      <div className="Arts_lab1-Container">
        <div className="arts_department1">
          <h2>Chemistry Lab</h2>
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
            Welcome to the Chemistry Lab, where the wonders of chemistry come to
            life through exciting experiments, innovative research, and a
            commitment to scientific exploration. Our modern laboratory is a hub
            of scientific discovery and learning, providing students with the
            perfect environment to dive into the captivating world of chemistry.
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
              Our lab is equipped with the latest chemistry apparatus,
              instruments, and technology, enabling students to conduct
              experiments and explore chemical reactions. From
              spectrophotometers to fume hoods, we have the tools needed for a
              comprehensive chemistry education.
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
            <h2>Experienced Faculty</h2>
            <p>
              Our team of experienced chemistry instructors and lab technicians
              are dedicated to nurturing the curiosity of our students. They
              guide them through experiments, research projects, and ensure that
              safety and ethical standards are upheld at all times.
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
            <h2>Hands-On Learning</h2>
            <p>
              We believe in the power of hands-on learning. Students have the
              opportunity to apply theoretical concepts, conduct experiments,
              and make real-world observations, thus gaining a profound
              understanding of chemistry.
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
            <h2>Safety Protocols</h2>
            <p>
              Safety is a paramount concern. Our lab strictly adheres to safety
              protocols and guidelines to ensure the well-being of our students
              and staff. Safety equipment, emergency procedures, and safety
              training are integral parts of our laboratory environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChemistryLab;
