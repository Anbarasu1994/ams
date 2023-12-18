import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VellamalPrograms.scss";


import MEd from "../../../../assets/Education/MEd.jpg"; // Import your program's image
import BEd from "../../../../assets/Education/BEd.jpeg"; // Import your program's image

import BEdVellamal from "./ProgramList/BEdVellamal";
import MEdVellamal from "./ProgramList/MEdVellamal";


function VellamalPrograms() {
  const [selectedprograms, setSelectedprograms] = useState(null);

  const openprogramsPopup = (labFacilityComponent) => {
    setSelectedprograms(labFacilityComponent);
  };

  const closeprogramsPopup = () => {
    setSelectedprograms(null);
  };
  const ProgramsList = [
    {
      name: "Bachelor of Education ",
      component: <BEdVellamal />,
      image: BEd,
    },
    {
      name: "Masters of Education ",
      component: <MEdVellamal/>,
      image: MEd,
    },

   
  ];
  return (
    <div className="programs-wrap">
      <div id="nursing-labfacilities" className="programsVellamalEd">
      <h1>Explore Our Diverse Range of Programs</h1>

        <div className="programs-List">
          <div className="programs-grid">
            {ProgramsList.map((labFacility) => (
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

export default VellamalPrograms;
