import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UGPrograms.scss";

import BotanyImage from "../../../../../assets/UG-SCIENCE/1.jpg";
import ChemistryImage from "../../../../../assets/UG-SCIENCE/2.jpg";
import PhysicsImage from "../../../../../assets/UG-SCIENCE/3.jpg";
import MathematicsImage from "../../../../../assets/UG-SCIENCE/4.jpg";
import ComputerScienceImage from "../../../../../assets/UG-SCIENCE/5.jpeg";
import BScBotany from "./Program List/BScBotany";
import BScChemistry from "./Program List/BScChemistry";
import BScPhysics from "./Program List/BScPhysics";
import BScMathematics from "./Program List/BScMathematics";
import BScComputerScience from "./Program List/BScComputerScience";
function UGPrograms() {
  const [selectedprograms, setSelectedprograms] = useState(null);

  const openprogramsPopup = (labFacilityComponent) => {
    setSelectedprograms(labFacilityComponent);
  };

  const closeprogramsPopup = () => {
    setSelectedprograms(null);
  };
  const ugProgramsList = [
    
    {
      name: "Bachelor of Science in Botany",
      component: <BScBotany />,
      image: BotanyImage,
    },
    {
      name: "Bachelor of Science in Chemistry",
      component: <BScChemistry />,
      image: ChemistryImage,
    },
    {
      name: "Bachelor of Science in Physics",
      component: <BScPhysics />,
      image: PhysicsImage,
    },
    
    {
      name: "Bachelor of Science in Mathematics",
      component: <BScMathematics />,
      image: MathematicsImage,
    },
    {
      name: "Bachelor of Science in Computer Sciences",
      component: <BScComputerScience />,
      image: ComputerScienceImage,
    },
  ];
  return (
    <div className="programs-wrap">
      <div id="arts-labfacilities" className="programsArts">
      <h1>Explore Our Diverse Range of Undergraduate Programs</h1>


        <div className="programs-List">
          <div className="programs-grid">
            {ugProgramsList.map((labFacility) => (
              <div
                className="programsCard"
                key={labFacility.name}
                onClick={() => openprogramsPopup(labFacility.component)}
              >
                <img
                  src={labFacility.image}
                  height={300}
                  width={300}
                  alt={labFacility.name}
                />
                <h3>{labFacility.name}</h3>
              </div>
            ))}
          </div>
        </div>
        {/* Render lab facility popup */}
        {selectedprograms && (
          <div className="programsPopup">
            <div className="programsPopupContent">
              <span className="CloseButton" onClick={closeprogramsPopup}>
                &times;
              </span>
              {selectedprograms}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UGPrograms;
