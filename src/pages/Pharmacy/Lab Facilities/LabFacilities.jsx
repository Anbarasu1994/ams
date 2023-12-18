import React, { useState } from "react";
import "./LabFacilities.scss"; // Updated import for SCSS
import Pharmaceutic from "../../../assets/Pharmaceutic.jpg";
import Pharmacology from "../../../assets/Pharmacology.jpg";
import Chemistry from "../../../assets/PharmaceuticalChemistry.jpg";
import Pharmacognosy from "../../../assets/Pharmacognosy.jpg";
import Analysis from "../../../assets/Pharmaceutical Analysis.jpg";
import instrumentation from "../../../assets/CIR.jpg";

import Bio from "../../../assets/Bio.jpg";
import Lab from "../../../assets/ComputerLap.jpg";
import Room from "../../../assets/machine room.jpg";

import Pharmaceutics from "./Lab/Pharmaceutics";
import PharmacologyComponent from "./Lab/Pharmacology";
import PharmChemistry from "./Lab/PharmChemistry";
import PharmacognosyComponent from "./Lab/Pharmacognosy";
import PharmaceuticalAnalysis from "./Lab/PharmaceuticalAnalysis";
import PharmaceuticalBiotechnology from "./Lab/PharmaceuticalBiotechnology";
import ComputerLab from "./Lab/ComputerLab";
import CIR from "./Lab/CIR";
import MachineRoom from "./Lab/MachineRoom";

function LabFacilities() {
  const [selectedLabFacility, setSelectedLabFacility] = useState(null);

  const openLabFacilityPopup = (labFacilityComponent) => {
    setSelectedLabFacility(labFacilityComponent);
  };

  const closeLabFacilityPopup = () => {
    setSelectedLabFacility(null);
  };

  const labFacilitiesData = [
    {
      name: "Pharmaceutics",
      component: <Pharmaceutics />,
      image: Pharmaceutic,
    },
    {
      name: "Pharmacology",
      component: <PharmacologyComponent />,
      image: Pharmacology,
    },
    {
      name: "Pharmaceutical Chemistry",
      component: <PharmChemistry />,
      image: Chemistry,
    },
    {
      name: "Pharmacognosy",
      component: <PharmacognosyComponent />,
      image: Pharmacognosy,
    },
    {
      name: "Pharmaceutical Analysis",
      component: <PharmaceuticalAnalysis />,
      image: Analysis,
    },
    {
      name: "CIR",
      component: <CIR />,
      image: instrumentation,
    },
    {
      name: "Pharmaceutical Biotechnology",
      component: <PharmaceuticalBiotechnology />,
      image: Bio,
    },
    {
      name: "Machine Room",
      component: <MachineRoom />,
      image: Room,
    },
    {
      name: "Computer Lab",
      component: <ComputerLab />,
      image: Lab,
    },
  ];

  return (
    <div id="lab-facilities" className="LabFacilitiesPharm">
      <h1>Research Facilities</h1>
      <div className="LabFacilities-List">
        <div className="LabFacilities-grid">
          {labFacilitiesData.map((labFacility) => (
            <div
              className="LabFacilityCard"
              key={labFacility.name}
              onClick={() => openLabFacilityPopup(labFacility.component)}
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
      {selectedLabFacility && (
        <div className="LabFacilityPopup">
          <div className="LabFacilityPopupContent">
            <span className="CloseButton" onClick={closeLabFacilityPopup}>
              &times;
            </span>
            {selectedLabFacility}
          </div>
        </div>
      )}
    </div>
  );
}

export default LabFacilities;
