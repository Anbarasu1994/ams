import React, { useState } from 'react'
import PhysicsLab from './Lab/PhysicsLab'
import Phy_Lab from "../../../assets/arst_physicslab1.jpg";
import Che_Lab from "../../../assets/arst_chemistrylab1.jpg";
import Botany_Lab from "../../../assets/arts_botanylab1.jpg";
import Computer_Lab from "../../../assets/arts_computerlab1.jpg";



import "./LabFacilities.scss"
import ChemistryLab from './Lab/ChemistryLab';
import BotanyLab from './Lab/BotanyLab';
import ComputerLab from './Lab/ComputerLab';
function Labfacilities() {
  const [selectedLabFacility, setSelectedLabFacility] = useState(null);

  const openLabFacilityPopup = (labFacilityComponent) => {
    setSelectedLabFacility(labFacilityComponent);
  };

  const closeLabFacilityPopup = () => {
    setSelectedLabFacility(null);
  };
  const labFacilitiesData = [
    {
      name: "Physics Lab",
      component: <PhysicsLab/>,
      image: Phy_Lab,
    },
    {
      name: "Chemistry Lab",
      component: <ChemistryLab/>,
      image: Che_Lab,
    },
    {
      name: "Botany Lab",
      component: <BotanyLab/>,
      image: Botany_Lab ,
    },
    {
      name: "Computer Lab",
      component: <ComputerLab/>,
      image: Computer_Lab,
    }
  ]
  return (
    <div id='arts-labfacilities' className='LabFacilitiesArts'> 
    <h1>Our State-of-the-Art Labs.</h1>
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
  )
}

export default Labfacilities
