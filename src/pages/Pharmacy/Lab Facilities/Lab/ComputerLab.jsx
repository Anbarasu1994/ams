import React from "react";
import PharmaceuticalBiotech from "../../../../assets/ComputerLab.jpg";
import Resource from "../../../../assets/computerequipment.png";
import Research from "../../../../assets/computer research.png";
import Mentor from "../../../../assets/computer faculty.png";
import Intern from "../../../../assets/computer access.png";
import "../Lab/ComputerLab.scss";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

function ComputerLab() {
  return (
    <div className="Lab9">
      <div className="Lab9-Container">
        <div className="department9">
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
            Our state-of-the-art computer lab is an integral part of the
            academic experience at Annai College of Pharmacy. Designed to meet
            the technological demands of pharmaceutical education and research,
            our computer lab provides students with access to cutting-edge
            resources and software tools
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
            <h2>Facilities and Equipment</h2>
            <br />
            <p>
              Our lab is equipped with high-performance workstations, ensuring
              smooth and efficient operation of complex pharmaceutical
              software.Students have access to a wide range of pharmaceutical
              software applications, including drug discovery tools,
              pharmacokinetics simulations, and molecular modeling software.
              High-speed internet connectivity allows students to access online
              pharmaceutical databases and research resources.
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
            <h2>Research and Analysis</h2>
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
            <h2>Faculty Support</h2>
            <p>
              Our experienced faculty members are available to guide students in
              utilizing the lab effectively for their research and academic
              projects. They provide training and assistance in using
              pharmaceutical software tools and conducting data analysis.
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
            <h2>Open Access</h2>
            <p>
              The computer lab is accessible to students during college hours,
              allowing them to work on assignments, conduct research, and
              enhance their pharmaceutical knowledge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerLab;
