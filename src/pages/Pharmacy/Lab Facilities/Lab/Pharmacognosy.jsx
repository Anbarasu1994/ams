import React from "react";
import Pharmacology from "../../../../assets/Pharmacognosy.jpg";
import Resource from "../../../../assets/pharmacologyresource.png";
import Research from "../../../../assets/researchoppertunity.png";
import Mentor from "../../../../assets/Pharmacologymentor.png";
import Intern from "../../../../assets/intern.png";
import "../Lab/Pharmacognosy.scss";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

function Pharmacognosy() {
  return (
    <div className="Lab4">
      <div className="Lab4-Container">
        <div className="department4">
          <h2>Pharmacognosy Lab Facilities</h2>
          <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            interval={5000}
          >
            <div>
              <img
                src={Pharmacology}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
            <div>
              <img
                src={Pharmacology}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
            <div>
              <img
                src={Pharmacology}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
          </Carousel>

          <p>
            Step into the fascinating world of pharmacognosy, where nature's
            secrets are unlocked. The Pharmacognosy Laboratory at Annai College
            Of Pharmacy is where science meets the natural world, allowing you
            to explore the wonders of medicinal plants and their therapeutic
            properties.
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
              Our state-of-the-art Pharmacognosy Laboratory is fully equipped
              with a diverse range of resources. From microscopes for detailed
              plant structure analysis to sophisticated extraction and
              chromatography equipment, you'll have access to cutting-edge tools
              to explore the medicinal potential of plants.
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
            <h2>Botanical Exploration</h2>
            <p>
              Delve into the study of medicinal plants and natural products.
              Analyze plant samples, extract bioactive compounds, and conduct
              experiments to uncover their pharmaceutical properties. Our lab
              provides an ideal environment for hands-on learning and research.
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
            <h2>Expert Guidance</h2>
            <p>
              Our experienced faculty members in the Pharmacognosy department
              are dedicated to helping you unlock the potential of natural
              remedies. They provide mentorship, share their knowledge, and
              guide you in your studies and research endeavors.
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
            <h2>Practical Experience</h2>
            <p>
              Participate in internships and collaborations with herbal medicine
              companies and research institutions. Apply your knowledge to
              real-world scenarios, conduct fieldwork, and gain valuable
              insights into the pharmaceutical applications of natural products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pharmacognosy;
