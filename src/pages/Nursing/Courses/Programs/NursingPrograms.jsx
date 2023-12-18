import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NursingPrograms.scss";
import BSNProgram from "./ProgramsList/BSNProgram.jsx";
import ANMProgram from "./ProgramsList/ANMProgram.jsx";

import ANMImage from "../../../../assets/Nursing-clg/anm.png"; // Import your program's image
import BSNImage from "../../../../assets/Nursing-clg/BSN.jpg"; // Import your program's image


function NursingPrograms() {
  const [selectedprograms, setSelectedprograms] = useState(null);

  const openprogramsPopup = (labFacilityComponent) => {
    setSelectedprograms(labFacilityComponent);
  };

  const closeprogramsPopup = () => {
    setSelectedprograms(null);
  };
  const ProgramsList = [
    {
      name: "Bachelor of Science in Nursing  ",
      component: <BSNProgram />,
      image: BSNImage,
    },
    {
      name: "Auxiliary Nurse and Midwife (ANM)  ",
      component: <ANMProgram />,
      image: ANMImage,
    },

   
  ];
  return (
    <div className="programs-wrap">
      <div id="nursing-labfacilities" className="programsNursing">
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

export default NursingPrograms;
