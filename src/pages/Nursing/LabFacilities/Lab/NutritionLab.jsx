import React from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import PharmaceuticalBiotech from "../../../../assets/arst_physicslab1.jpg";
import Resource from "../../../../assets/arts_physicslab_modernEquipment.png";
import Research from "../../../../assets/arts_lab_faculty.png";
import Mentor from "../../../../assets/arts_hands on learning.png";
import Intern from "../../../../assets/arst_safetyprotocols.png";
import Nutrition_lab from "../../../../assets/Nursing-clg/Nutrition_lab.jpeg"
import "./NursingLab.scss";
function NutritionLab() {
    return (
        <div className="Nurising_lab1">
          <div className="Nurising_lab1-Container">
            <div className="nursing_department1">
            <h2>Nutrition  Lab</h2>
              <Carousel
                showArrows={true}
                showThumbs={false}
                autoPlay={true}
                interval={5000}
              >
                <div>
                  <img
                    src={ Nutrition_lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
                <div>
                  <img
                    src={ Nutrition_lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
                <div>
                  <img
                    src={ Nutrition_lab}
                    alt="Top Banner"
                    className="top-banner"
                    height={500}
                    width={1000}
                  />
                </div>
              </Carousel>
              <p>
            Welcome to our Nutrition Lab, a vital space dedicated to understanding the science of food and its impact on health. Here, students delve into the principles of nutrition and its practical applications.
          </p>
        </div>
        <br />
        <div className="Resource">
          <div className="Resourceimage">
            <img
              src={Resource}
              alt="Resource"
              width={200}
              height={200}
            />
          </div>
          <div className="ResourceInfo">
            <h2>State-of-the-Art Research</h2>
            <br />
            <p>
              Equipped with advanced research tools, our lab enables students to conduct comprehensive nutritional studies and assessments.
            </p>
          </div>
        </div>
        <br />
        <div className="Research">
          <div className="Researchimage">
            <img
              src={Research}
              alt="Research"
              width={200}
              height={200}
            />
          </div>
          <div className="ResearchInfo">
            <h2>Practical Applications</h2>
            <p>
              Students engage in practical experiments exploring various dietary regimes, food analysis, and their effects on health and well-being.
            </p>
          </div>
        </div>
        <br />
        <div className="Mentor">
          <div className="mentorimage">
            <img
              src={Mentor}
              alt="Mentor"
              width={200}
              height={200}
            />
          </div>
          <div className="Mentorinfo">
            <h2>Expert Guidance</h2>
            <p>
              Under the mentorship of experienced professionals, students learn to develop tailored nutritional plans and understand their significance in patient care.
            </p>
          </div>
        </div>
        <br />
        <div className="Intern">
          <div className="internimage">
            <img
              src={Intern}
              alt="Intern"
              width={200}
              height={200}
            />
          </div>
          <div className="interninfo">
            <h2>Focus on Healthy Living</h2>
            <p>
              Our lab emphasizes the role of nutrition in promoting healthy living and preventing chronic diseases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutritionLab;
  
