import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UGPrograms.scss";
import BAEnglish from "./Program List/BAEnglish";
import English from "../../../../../assets/UG-ARTS/1.webp";
import Tamil from "../../../../../assets/UG-ARTS/2.jpg";
import BComImage from "../../../../../assets/UG-ARTS/3.jpg";
import BAHistoryImage from "../../../../../assets/UG-ARTS/4.jpg";




import BATamil from "./Program List/BATamil";
import BComComputerApplication from "./Program List/BComComputerApplication";
import BAHistory from "./Program List/BAHistory";

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
      name: "Bachelor of Arts in English    ",
      component: <BAEnglish />,
      image: English,
    },
    {
      name: "Bachelor of Arts in Tamil",
      component: <BATamil />,
      image: Tamil,
    },

    {
      name: "Bachelor of Arts in History",
      component: <BAHistory />,
      image: BAHistoryImage,
    },
    {
      name: "Bachelor of Commerce",
      component: <BComComputerApplication />,
      image: BComImage,
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
