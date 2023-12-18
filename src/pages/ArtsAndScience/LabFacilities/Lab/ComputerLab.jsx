import React from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import PharmaceuticalBiotech from "../../../../assets/arts_computerlab1.jpg";
import Resource from "../../../../assets/arst_lab_workstation.png";
import Research from "../../../../assets/arts_lab_highspeed_internet.png";
import Mentor from "../../../../assets/arst_lab_software.png";
import Intern from "../../../../assets/arst_lab_24_7.png";
import "./PhysicsLab.scss";
function ComputerLab() {
  return (
    <div className="Arts_lab1">
      <div className="Arts_lab1-Container">
        <div className="arts_department1">
          <h2>Computer Lab</h2>
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
            Welcome to the cutting-edge Computer Lab, a hub of innovation,
            learning, and technology. Our computer lab is designed to facilitate
            education, research, and exploration in the digital age. With
            state-of-the-art infrastructure and a commitment to excellence, we
            provide an environment where students and researchers can thrive.
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
            <h2>Advanced Workstations</h2>
            <br />
            <p>
              Our computer lab is equipped with high-performance workstations
              featuring the latest hardware and software. Each workstation is
              optimized for a wide range of computing tasks, from programming
              and data analysis to graphic design and simulations.
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
            <h2>High-Speed Internet</h2>
            <p>
              We provide high-speed internet connectivity to support research,
              online learning, and real-time collaboration. Our robust network
              infrastructure ensures seamless access to online resources.
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
            <h2>Diverse Software</h2>
            <p>
              Whether you're pursuing computer science, data analysis, or
              design, our lab offers a diverse suite of software applications to
              meet your specific needs. Students have access to programming
              languages, design tools, data analytics software, and more.
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
            <h2>24/7 Access</h2>
            <p>
              The lab operates on a flexible schedule, allowing students and
              researchers to work on their projects at their convenience. We
              understand that innovation doesn't always adhere to regular
              business hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerLab;
