import React from "react";
import Chemistry from "../../../../assets/PharmaceuticalChemistry.jpg";
import "../Lab/PharmChemistry.scss";
import Resource from "../../../../assets/chemistoryresource.png";
import Research from "../../../../assets/chemistoryresearch.png";
import Mentor from "../../../../assets/chemistorymentor.png";
import Intern from "../../../../assets/chemistoryintern.png";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

function PharmChemistry() {
  return (
    <div className="Lab3">
      <div className="Lab3-Container">
        <div className="department3">
          <h2>Pharmaceutical Chemistry Lab Facilities</h2>
          <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            interval={5000}
          >
            <div>
              <img
                src={Chemistry}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
            <div>
              <img
                src={Chemistry}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
            <div>
              <img
                src={Chemistry}
                alt="Top Banner"
                className="top-banner"
                height={500}
                width={1000}
              />
            </div>
          </Carousel>

          <p>
            As you embark on your journey through the Pharmaceutical Chemistry
            Laboratory, you'll benefit from the guidance of our experienced
            faculty members. Our faculty members are more than educators; they
            are accomplished mentors committed to nurturing your growth as a
            pharmaceutical chemist. Seek their guidance for research projects,
            coursework, and career development. Additionally, explore valuable
            internship opportunities with pharmaceutical companies and research
            institutions to gain real-world experience and make industry
            connections.
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

export default PharmChemistry;
