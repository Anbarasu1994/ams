import React from "react";
import Pharmaceutical from "../../../../assets/PharmaceuticalAnalysis.jpg";
import Resource from "../../../../assets/pharmacologyresource.png";
import Research from "../../../../assets/researchoppertunity.png";
import Mentor from "../../../../assets/Pharmacologymentor.png";
import Intern from "../../../../assets/intern.png";
import "../Lab/PharmaceuticalAnalysis.scss";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

function PharmaceuticalAnalysis() {
  return (
    <div className="Lab5">
      <div className="Lab5-Container">
        <div className="department5">
          <h2>Pharmaceutical Analysis Lab Facilities</h2>
          <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            interval={5000}
          >
            <div>
              <img
                src={Pharmaceutical}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
            <div>
              <img
                src={Pharmaceutical}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
            <div>
              <img
                src={Pharmaceutical}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
          </Carousel>

          <p>
            Welcome to the world of precision and accuracy in pharmaceutical
            analysis. The Pharmaceutical Analysis Laboratory at Annai College Of
            Pharmacy is dedicated to unraveling the chemical intricacies of
            pharmaceutical compounds, ensuring their quality, safety, and
            efficacy.
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
              Our cutting-edge Pharmaceutical Analysis Laboratory is equipped
              with state-of-the-art instruments and technology. From
              high-performance liquid chromatography (HPLC) to gas
              chromatography (GC), spectrophotometers, and mass spectrometers,
              you'll have access to the latest tools for pharmaceutical
              analysis..
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
            <h2>Quality Control and Assurance</h2>
            <p>
              Pharmaceutical analysis plays a vital role in quality control and
              assurance. Learn how to analyze raw materials, finished products,
              and drug formulations to ensure they meet the highest quality
              standards and regulatory requirements
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
              Our experienced faculty members in the Pharmaceutical Analysis
              department are dedicated to nurturing your analytical skills. They
              offer mentorship, share their expertise, and guide you in
              conducting precise and reliable analyses
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
            <h2>Industry Applications</h2>
            <p>
              The skills and knowledge gained in our Pharmaceutical Analysis
              Laboratory are highly applicable in the pharmaceutical industry.
              Prepare for a career in quality control, quality assurance,
              analytical research, or regulatory affairs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PharmaceuticalAnalysis;
