import React from "react";
import "../Lab/Pharmaceutics.scss";
import Pharmaceutic from "../../../../assets/Pharmaceutic.jpg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Pharmlab from "../../../../assets/Pharmaceuticslap.png";
import Resource from "../../../../assets/research.png";
import Research from "../../../../assets/researchoppertunity.png";
import Mentor from "../../../../assets/International education.png";
import Intern from "../../../../assets/intern.png";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

function Pharmaceutics() {
  return (
    <div className="Lab1">
      <div className="Lab1-Container">
        <div className="department1">
          <h2>Pharmaceutics Lab Facilities</h2>
          {/* Use the Carousel component for the images */}
          <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            interval={5000}
          >
            <div>
              <img
                src={Pharmaceutic}
                alt="Top Banner"
                height={500}
                width={1000}
              />
            </div>
            <div>
              <img
                src={Pharmaceutic}
                alt="Top Banner"
                height={500}
                width={1000}
              />
            </div>
            <div>
              <img
                src={Pharmaceutic}
                alt="Top Banner"
                height={500}
                width={1000}
              />
            </div>
            {/* Add more images here as needed */}
          </Carousel>

          <p>
            Welcome to the Pharmaceutical Chemistry Laboratory at Annai College
            Of Pharmacy, where the world of molecules and compounds merges with
            pharmaceutical science. Our cutting-edge lab facility is dedicated
            to exploring the intricate chemistry behind drug development and
            pharmaceutical research. As a student at our esteemed institution,
            you'll have exclusive access to this advanced laboratory.
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
            <h2>Equipment and Resources</h2>
            <br />
            <p>
              Welcome to the Pharmaceutical Chemistry Laboratory at Annai
              College Of Pharmacy, where the world of molecules and compounds
              merges with pharmaceutical science. Our cutting-edge lab facility
              is dedicated to exploring the intricate chemistry behind drug
              development and pharmaceutical research. As a student at our
              esteemed institution, you'll have exclusive access to this
              advanced laboratory.
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
              Explore a wide array of research projects aligned with your
              interests. Whether you're passionate about optimizing drug
              delivery, developing novel formulations, or conducting
              pharmacokinetic studies, you'll find research opportunities that
              fuel your curiosity. Our laboratory serves as a hub for
              groundbreaking research in pharmaceutical chemistry, offering you
              the chance to contribute to innovative advancements in healthcare.
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
            <h2>Faculty Mentorship</h2>
            <p>
              At Annai College Of Pharmacy, we take pride in our tradition of
              pioneering research that reshapes the pharmaceutical landscape.
              The Pharmaceutical Chemistry Laboratory is at the heart of this
              commitment. Engage in transformative research projects,
              collaborate with renowned faculty members, and make meaningful
              contributions to pharmaceutical advancements that impact
              healthcare. Our dedicated team of faculty members, led by [Faculty
              Supervisor's Name], is here to guide you throughout your journey,
              providing mentorship and support for your research endeavors,
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
              As you embark on your journey through the Pharmaceutical Chemistry
              Laboratory, you'll benefit from the guidance of our experienced
              faculty members. Our faculty members are more than educators; they
              are accomplished mentors committed to nurturing your growth as a
              pharmaceutical chemist. Seek their guidance for research projects,
              coursework, and career development. Additionally, explore valuable
              internship opportunities with pharmaceutical companies and
              research institutions to gain real-world experience and make
              industry connections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pharmaceutics;
