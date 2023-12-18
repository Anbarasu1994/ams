import React from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import PharmaceuticalBiotech from "../../../../assets/arst_physicslab1.jpg";
import Resource from "../../../../assets/arts_physicslab_modernEquipment.png";
import Research from "../../../../assets/arts_lab_faculty.png";
import Mentor from "../../../../assets/arts_hands on learning.png";
import Intern from "../../../../assets/arst_safetyprotocols.png";
import "./PhysicsLab.scss";
function PhysicsLab() {
  return (
    <div className="Arts_lab1">
      <div className="Arts_lab1-Container">
        <div className="arts_department1">
          <h2>Physics Lab</h2>
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
            Welcome to the Physics Lab, where we explore the fundamental
            principles of the physical world through hands-on experiments and
            research. Our state-of-the-art laboratory is equipped with
            cutting-edge tools and equipment, providing students with an
            interactive and immersive learning experience.
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
            <h2>Modern Equipment</h2>
            <br />
            <p>
              Our lab is furnished with the latest physics apparatus and
              instruments, including spectrometers, oscilloscopes, microscopes,
              and more. These tools empower students to conduct experiments and
              investigations that reinforce classroom learning.
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
              In addition to supporting coursework, our computer lab plays a
              crucial role in pharmaceutical research and analysis. Students can
              use the lab for: Conducting virtual experiments and simulations
              related to drug formulation and analysis. Analyzing pharmaceutical
              data and conducting statistical research. Exploring molecular
              structures and modeling drug interactions.
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
            <h2>Hands-on Learning</h2>
            <p>
              We strongly believe in the value of hands-on learning. Our physics
              lab provides students with the opportunity to apply theoretical
              concepts, conduct experiments, and collect real-world data,
              fostering a deeper understanding of physics.
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
            <h2>Safety First</h2>
            <p>
              Safety is our top priority. We maintain strict safety protocols
              and guidelines to ensure the well-being of our students. Safety
              equipment and precautions are in place to create a secure
              environment for scientific exploration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhysicsLab;
