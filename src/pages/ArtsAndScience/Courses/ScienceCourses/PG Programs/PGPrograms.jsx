import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../UG Programs/UGPrograms.scss";
import MSChemistryImage from "../../../../../assets/PG-SCI/1.jpg";
import MSPhysicsImage from "../../../../../assets/PG-SCI/2.jpg";
import MSMathematicsImage from "../../../../../assets/PG-SCI/3.jpg";
import MSChemistry from "./Program List/MSChemistry";
import MSPhysics from "./Program List/MSPhysics";
import MSMathematics from "./Program List/MSMathematics";


function PGPrograms() {
  const [selectedprograms, setSelectedprograms] = useState(null);

  const openprogramsPopup = (labFacilityComponent) => {
    setSelectedprograms(labFacilityComponent);
  };

  const closeprogramsPopup = () => {
    setSelectedprograms(null);
  };
  const ugProgramsList = [
  
    {
      name: "Master of Science in Chemistry",
      component: <MSChemistry />,
      image: MSChemistryImage,
    },
    {
      name: "Master of Science in Physics",
      component: <MSPhysics />,
      image: MSPhysicsImage,
    },
    {
      name: "Master of Science in Mathematics",
      component: <MSMathematics />,
      image: MSMathematicsImage,
    }
  ];
  return (
    <div className="programs-wrap">
      <div id="arts-labfacilities" className="programsArts">
      <h1>Explore Our Diverse Range of Postgraduate Programs</h1>

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

export default PGPrograms;
