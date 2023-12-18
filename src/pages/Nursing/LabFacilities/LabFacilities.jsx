import React, { useState } from 'react'
import Phy_Lab from "../../../assets/arst_physicslab1.jpg";
import Che_Lab from "../../../assets/arst_chemistrylab1.jpg";

import  Nursing_foundation_lab from "../../../assets/Nursing-clg/Nursing _foundation_lab.jpg"
import Ad_clinical_lab from "../../../assets/Nursing-clg/Advanced_clcinical_lab.jpg"
import  Nutrition_lab from "../../../assets/Nursing-clg/Nutrition_lab.jpeg"
import "./LabFacilities.scss"
import Audio_visual_lab from "../../../assets/Nursing-clg/audio_visual_lab.jpeg"

import Community_Nursing_Lab from "../../../assets/Nursing-clg/commmunity_nursing_lab.jpg"

import ComputerLab from './Lab/ComputerLab';
import PreclinicalLab from './Lab/PreclinicalLab';
import MCHLab from './Lab/MCHLab';
import NursingFoundationLab from './Lab/NursingFoundationLab';
import AdvancedClinicalLab from './Lab/AdvancedClinicalLab';
import NutritionLab from './Lab/NutritionLab';
import CommunityHealthNursingLab from './Lab/CommunityHealthNursingLab';
import AudioVisualLab from './Lab/AudioVisualLab';
import Computer_lab from "../../../assets/Nursing-clg/computer_lab.jpg"

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
      name: "Preclinical lab",
      component: <PreclinicalLab/>,
      image: Phy_Lab,
    },
    {
      name: "MCH lab",
      component: <MCHLab/>,
      image: Che_Lab,
    },
    {
      name: "Nursing foundation lab",
      component: <NursingFoundationLab/>,
      image:  Nursing_foundation_lab ,
    },
    {
      name: "Advance clinical lab",
      component: <AdvancedClinicalLab/>,
      image: Ad_clinical_lab ,
    },{
      name: "Nutrition lab",
      component: <NutritionLab />,
      image:  Nutrition_lab,
    },{
      name: "Computer lab",
      component: <ComputerLab/>,
      image: Computer_lab,
    },{
      name: "Community health nursing lab",
      component: <CommunityHealthNursingLab/>,
      image: Community_Nursing_Lab,
    },{
      name: "Audio visual lab",
      component: <AudioVisualLab/>,
      image: Audio_visual_lab,
    }
  ]
  return (
    <div id='lab-facilities' className='LabFacilitiesNursing'> 
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
