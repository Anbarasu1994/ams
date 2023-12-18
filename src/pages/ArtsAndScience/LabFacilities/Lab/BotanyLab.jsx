import React from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import PharmaceuticalBiotech from "../../../../assets/arts_botanylab1.jpg";
import Resource from "../../../../assets/computerequipment.png";
import Research from "../../../../assets/arts_lab_faculty.png";
import Mentor from "../../../../assets/arts_botanylab_plant.png";
import Intern from "../../../../assets/arst_lab_biodiversity.png";
import "./PhysicsLab.scss";
function BotanyLab() {
  return (
    <div className="Arts_lab1">
      <div className="Arts_lab1-Container">
        <div className="arts_department1">
          <h2>Botany Lab</h2>
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
            Welcome to the Botany Lab, a place where the marvels of the plant
            world come to life. Our state-of-the-art botany laboratory is a hub
            of botanical research, discovery, and exploration, dedicated to
            enhancing our understanding of the plant kingdom and its pivotal
            role in the environment.
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
            <h2>Cutting-Edge Equipment</h2>
            <br />
            <p>
              Our laboratory is equipped with the latest botanical tools and
              technology, including high-powered microscopes, plant growth
              chambers, and specialized software for plant analysis. These
              resources enable students and researchers to delve deep into the
              world of plants, from microscopic structures to entire ecosystems.
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
            <h2>Expert Faculty</h2>
            <p>
              Our accomplished team of botanists, researchers, and lab
              technicians is passionate about plant science. They are committed
              to providing mentorship and guidance to students and facilitating
              groundbreaking research in diverse botanical disciplines.
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
            <h2>Greenhouse Facility</h2>
            <p>
              Adjacent to the lab is a state-of-the-art greenhouse where
              students can conduct experiments, cultivate a wide variety of
              plant species, and observe the effects of controlled environmental
              conditions on plant growth.
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
            <h2>Biodiversity and Conservation</h2>
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

export default BotanyLab;
