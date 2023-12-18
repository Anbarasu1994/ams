import React from "react";
import PharmaceuticalBiotech from "../../../../assets/machine room.jpg";
import Resource from "../../../../assets/pharmacologyresource.png";
import Research from "../../../../assets/researchoppertunity.png";
import Mentor from "../../../../assets/Pharmacologymentor.png";
import Intern from "../../../../assets/intern.png";
import "../Lab/PharmaceuticalBiotechnology.scss";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

function MachineRoom() {
  return (
    <div className="Lab7">
      <div className="Lab7-Container">
        <div className="department7">
          <h2>Machine Room </h2>
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
            The machine room at Annai College Of Pharmacy is equipped with
            state-of-the-art equipment and resources to support your academic
            and research needs. Our dedicated machine room is designed to
            provide students with hands-on experience in utilizing various
            pharmaceutical machinery and equipment.
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
            <h2>Laboratory Resources</h2>
            <br />
            <p>
              Our machine room boasts a comprehensive range of laboratory
              resources essential for hands-on learning and research. Students
              have access to cutting-edge equipment and tools that facilitate
              their understanding of pharmaceutical machinery and process.
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
            <h2>Research Opportunities</h2>
            <p>
              The machine room offers a platform for research in pharmaceutical
              machinery and processes. Students can engage in projects related
              to process optimization, quality control, formulation development,
              and new product creation.
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
            <h2>Faculty Guidance</h2>
            <p>
              Experienced faculty members in the machine room provide valuable
              guidance and mentorship to students. They share their expertise in
              pharmaceutical machinery, ensuring students' successful learning
              and research endeavors.
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
            <h2>Internships</h2>
            <p>
              Students have the opportunity to participate in internships and
              collaborate with pharmaceutical companies and research
              institutions. These internships offer practical exposure and allow
              students to apply their knowledge to real-world settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MachineRoom;
