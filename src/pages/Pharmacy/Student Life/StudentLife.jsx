import React from "react";
import life from "../../../assets/clglife.jpg";
import "../Student Life/StudentLife.scss";
import YRC from "../../../assets/yrcevent.jpg";
import NSS from "../../../assets/nssevent.jpg";
import SNA from "../../../assets/snaevent.jpg";
import Sports from "../../../assets/Sportsevent.jpg";
import Intern from "../../../assets/internship.jpg";
import library from "../../../assets/library.png";
import lifebg from "../../../assets/studentlife.jpg";
import icon from "../../../assets/listicon.png";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function StudentLife() {
  return (
    <div  id="student-life" className="Student-Life2" >
      <div className="Life-details2">
        <div className="studentlifebg">
          <img src={lifebg} height={500} width={600} alt="Student Life" />
        </div>
        <div className="StudentLife-list2">
          <div className="lifelist">
            <ul>
              <li>
                <ArrowRightIcon style={{ color: "blue", fontSize: "44px" }} />
                NSS
              </li>
              <li>
                <ArrowRightIcon style={{ color: "blue", fontSize: "44px" }} />
                YRC
              </li>
              <li>
                <ArrowRightIcon style={{ color: "blue", fontSize: "44px" }} />
                SPORTS
              </li>
              <li>
                <ArrowRightIcon style={{ color: "blue", fontSize: "44px" }} />
                SNA EVENTS
              </li>
              <li>
                <ArrowRightIcon style={{ color: "blue", fontSize: "44px" }} />
                LIBRARY
              </li>
              <li>
                <ArrowRightIcon style={{ color: "blue", fontSize: "44px" }} />
                INTERNSHIP
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLife;
