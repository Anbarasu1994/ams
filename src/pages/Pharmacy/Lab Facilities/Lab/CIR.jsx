import React from "react";
import PharmaceuticalBiotech from "../../../../assets/CIR.jpg";
import Resource from "../../../../assets/pharmacologyresource.png";
import Research from "../../../../assets/researchoppertunity.png";
import Mentor from "../../../../assets/Pharmacologymentor.png";
import Intern from "../../../../assets/intern.png";
import "../Lab/PharmaceuticalBiotechnology.scss";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

function CIR() {
  return (
    <div className="Lab7">
      <div className="Lab7-Container">
        <div className="department7">
          <h2>Central Instrumentation Room </h2>
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
            Discover the heart of cutting-edge research in our Central
            Instrumentation Room. This state-of-the-art facility houses a wide
            range of advanced scientific instruments and equipment. It's the
            ideal place for students and researchers to conduct experiments,
            analyze data, and explore innovative solutions in various fields of
            science and technology.
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
            <h2>Machine Room Facilities</h2>
            <br />
            <p>
              Our machine room is equipped with a wide range of advanced
              machinery and equipment, offering you the opportunity to gain
              hands-on experience with cutting-edge technology. From
              state-of-the-art pharmaceutical manufacturing equipment to
              precision instruments for quality control and analysis, our
              machine room provides the ideal environment for learning and
              research. You'll have the chance to explore various pharmaceutical
              processes, optimize production techniques, and develop essential
              skills that are highly valued in the pharmaceutical industry.
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
              Explore a wide array of research projects and discoveries within
              our central instrumentation room. This state-of-the-art facility
              provides access to advanced analytical instruments and tools,
              allowing you to delve into groundbreaking research. Analyze
              compounds, conduct experiments, and explore innovative techniques
              to advance pharmaceutical science. Collaborate with our
              experienced faculty members on projects ranging from drug
              development to quality control. The central instrumentation room
              is where you can transform theoretical knowledge into practical
              insights, contributing to advancements in pharmaceutical research
              and development.
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
              Our dedicated team of experienced faculty members in the central
              instrumentation room is committed to providing you with expert
              guidance and mentorship. Whether you're working on research
              projects, conducting experiments, or using advanced analytical
              instruments, our faculty is here to support your academic and
              research endeavors. They share their knowledge, offer valuable
              insights, and assist you in harnessing the full potential of the
              instrumentation room's resources. With their mentorship, you'll
              have the opportunity to excel in your studies and make significant
              contributions to pharmaceutical research and development.
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
              These internships provide students with hands-on experience and
              the chance to apply their knowledge in real-world scenarios.
              Interns have the opportunity to work with cutting-edge analytical
              instruments, conduct experiments, and contribute to ongoing
              research projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CIR;
