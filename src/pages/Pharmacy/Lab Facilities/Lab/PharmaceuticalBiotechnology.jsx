import React from "react";
import PharmaceuticalBiotech from "../../../../assets/PharmaceuticalBiotechnology.jpg";
import Resource from "../../../../assets/pharmacologyresource.png";
import Research from "../../../../assets/researchoppertunity.png";
import Mentor from "../../../../assets/Pharmacologymentor.png";
import Intern from "../../../../assets/intern.png";
import "../Lab/PharmaceuticalBiotechnology.scss";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

function PharmaceuticalBiotechnology() {
  return (
    <div className="Lab7">
      <div className="Lab7-Container">
        <div className="department7">
          <h2>Pharmaceutical Biotechnology Lab Facilities</h2>
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
            The Pharmaceutical Biotechnology Lab at Annai College of Pharmacy is
            a dedicated space where innovation and scientific exploration
            converge. Here, we delve into the fascinating realm of biotechnology
            as it applies to pharmaceuticals.
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
              Our lab is equipped with advanced biotechnological instruments and
              resources. We house state-of-the-art equipment for genetic
              engineering, bioprocess optimization, and biopharmaceutical
              development. These resources mirror the sophistication of
              contemporary pharmaceutical biotechnology research.
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
              Explore a myriad of research opportunities tailored to your
              interests. Engage in projects related to genetic modification,
              bioprocessing, and the development of biopharmaceuticals.
              Collaborate with our accomplished faculty and industry partners to
              contribute to groundbreaking discoveries in healthcare.
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
              Our experienced faculty members are at the forefront of
              pharmaceutical biotechnology research. They are not just educators
              but also mentors dedicated to nurturing your growth in this
              dynamic field. Seek their guidance for research projects,
              coursework, and career aspirations.
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
              Embark on a journey of practical learning through internships with
              esteemed biotech companies and research institutions. Apply your
              theoretical knowledge to real-world scenarios and establish
              valuable connections within the biotechnology industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PharmaceuticalBiotechnology;
