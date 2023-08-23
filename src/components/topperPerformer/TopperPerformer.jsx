// src/components/TopperPerformer.js

import React from "react";
import "./topperPerformer.scss"; // Import the SCSS file for styling
import gallery1 from "../../assets/a-1.jpg";
import gallery2 from "../../assets/a-2.jpg";
import gallery3 from "../../assets/a-3.jpg";
import gallery4 from "../../assets/a-4.jpg";
import gallery5 from "../../assets/a-5.jpg";
import gallery6 from "../../assets/a-6.jpg";

const TopperPerformer = () => {
  return (
    <div className="TopperPerformer-wrapper">
        <div className="TopperPerformer-title">
      <h6>AMS GROUPS</h6>
      <h3>Topper Performers</h3>
      <p>We’re about to expose “The Secrets” that only Toppers know about.</p>
      </div>
      <div>
        <div className="gallery-wrapper">
          <div className="image-gallery">
            <img src={gallery1} alt="Image 1" />
            <img src={gallery2} alt="Image 2" />
            <img src={gallery3} alt="Image 3" />
            <img src={gallery4} alt="Image 4" />
            <img src={gallery5} alt="Image 5" />
            <img src={gallery6} alt="Image 6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopperPerformer;
