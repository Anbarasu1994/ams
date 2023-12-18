import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../UG Programs/UGPrograms.scss";
import MATamilImage from "../../../../../assets/PG-ARTS/1.jpg";
import TreeViewPrograms from "../../Tree View/TreeViewPrograms";
import MAEnglishImage from "../../../../../assets/PG-ARTS/2.jpeg";

import MATamil from "./Program List/MATamil";
import MAEnglish from "./Program List/MAEnglish";

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
      name: "Master of Arts in Tamil    ",
      component: <MATamil />,
      image: MATamilImage,
    },
    {
      name: "Master of Arts in English  ",
      component: <MAEnglish />,
      image: MAEnglishImage,
    },
  ];
  return (
    <div className="programs-wrap">
      
      <div id="arts-labfacilities" className="programsArts">
        
        <h1>Explore Our Diverse Range of Postgraduate Programs</h1>
       <div className="programArt">
       {/* <div className="tree-view">
          <TreeViewPrograms />
        </div> */}

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
