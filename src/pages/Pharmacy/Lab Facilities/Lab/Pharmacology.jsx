import React from "react";
import Pharmacologyimage from "../../../../assets/Pharmacology.jpg";
import "../Lab/Pharmacology.scss";
import Resource from "../../../../assets/pharmacologyresource.png";
import Research from "../../../../assets/Pharmacologyresearch.png";
import Mentor from "../../../../assets/Pharmacologymentor.png";
import Intern from "../../../../assets/Pharmacologyintern.png";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
function Pharmacology() {
  return (
    <div className="Lab2">
      <div className="Lab2-Container">
        <div className="department2">
          <h2>Pharmacology Lab Facilities</h2>
          <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            interval={5000}
          >
            <div>
              <img
                src={Pharmacologyimage}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
             <div>
              <img
                src={Pharmacologyimage}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
            <div>
              <img
                src={Pharmacologyimage}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
          </Carousel>

          <p>
            Welcome to the world of pharmacology, where the science of drugs and
            their effects on living organisms come to life. At Annai College Of
            Pharmacy, our Pharmacology Laboratory is a hub of scientific
            exploration, enabling you to unravel the mysteries of how
            medications interact with the human body.
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
              Welcome to the world of pharmacology, where the science of drugs
              and their effects on living organisms come to life. At Annai
              College Of Pharmacy, our Pharmacology Laboratory is a hub of
              scientific exploration, enabling you to unravel the mysteries of
              how medications interact with the human body.
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
            <h2>Experimental Opportunities</h2>
            <p>
              Explore a wide range of research projects tailored to your
              interests and goals. Dive into studies related to drug mechanisms,
              toxicology, and the development of new pharmaceuticals. At our
              lab, you can turn theory into practice.
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
            <h2>Guidance from Experts</h2>
            <p>
              Our faculty members in the Pharmacology department are experts in
              their field, dedicated to guiding you through your scientific
              journey. They offer mentorship, valuable insights, and hands-on
              experience to help you excel in your coursework and research
              projects.
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
            <h2>Industry Exposure</h2>
            <p>
              Through internships and collaborations with pharmaceutical
              companies and research institutions, you'll have the opportunity
              to gain real-world experience. Apply your knowledge to practical
              scenarios, build industry connections, and prepare for a
              successful career in pharmacology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pharmacology;
