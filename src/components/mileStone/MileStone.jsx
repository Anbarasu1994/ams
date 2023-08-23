import React from "react";
import "./mileStone.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import milestone from "../../assets/milestone.png";

function MileStone() {
  return (
    <div className="mileStone-wrapper">
      <div className="mileStone-title">
        <h2  data-aos="fade-right"><span>
          MILESTONE </span></h2>
      </div>
      <div className="roadmap">
        <img src={milestone} alt="" width={"80%"} height={"600px"} />
      </div>
    </div>
  );
}

export default MileStone;
