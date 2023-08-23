import React from "react";

import "./activities.scss"; // Import the CSS file if it exists in the same folder as this component
import nss from "../../assets/nss.jpg";
import yrc from "../../assets/yrc.jpg";
import sna from "../../assets/sna.jpg";
import library from "../../assets/library.jpg";
import internship from "../../assets/internship.jpg";
import sports from "../../assets/sportsImage.jpg";

const Activities = () => {
  return (
    <div className="activities-wrapper">
      <div className="Activities-title">
      <h3>CAMPUS TOUR</h3>
      </div>
     

      <div className="image-grid">

        <div className="image-container">
          <img src={nss} alt="Image 1" />

          <div className="hover-text">NSS</div>
        </div>

        <div className="image-container" id="down">
          <img src={yrc} alt="Image 2" />

          <div className="hover-text">YRC</div>
        </div>

        <div className="image-container">
          <img src={sna} alt="Image 3" />

          <div className="hover-text">SNA</div>
        </div>

        <div className="image-container" id="down">
          <img src={internship} alt="Image 4" />

          <div className="hover-text">INTERNSHIP</div>
        </div>

        <div className="image-container">
          <img src={library} alt="Image 5" />

          <div className="hover-text">LIBRARY</div>
        </div>

        <div className="image-container" id="down">
          <img src={sports} alt="Image 6" />

          <div className="hover-text">SPORTS AND GAMES</div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
