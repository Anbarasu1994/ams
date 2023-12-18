import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
// import About from "./About/About";
// import Courses from "./Courses/Courses";
// import ArtsNav from "./Artsnavbar/ArtsNav";
// import LabFacilities from "./Lab Facilities/LabFacilities";
// import StudentLife from "./Student Life/StudentLife";
// import ArtsFooter from "./ArtsFooter";
import "./ArtsAndScience.scss"; // Import the SCSS file
import "font-awesome/css/font-awesome.min.css";
import ArtsNavBar from "./ArtsNavBar/ArtsNavBar";
import Courses from "./Courses/Courses";
import "font-awesome/css/font-awesome.min.css";

import About from "./About/About";
import ArtsBanner from "./ArtsBanner/ArtsBanner";
import ArtsFooter from "./Footer/ArtsFooter";
import Labfacilities from "../ArtsAndScience/LabFacilities/LabFacilities";
import StudentLife from "./StudentLife/StudentLife";

const ArtsAndScience = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.hash);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const offset = window.innerHeight * 0.3; // Adjust the offset as needed
        if (rect.top >= -offset && rect.bottom <= window.innerHeight - offset) {
          setActiveLink("#" + section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="ArtsCollege">
      <ArtsNavBar />
      <div id="artsbanner" className="section">
        <ArtsBanner/>
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="courses-arts" className="section">
        <Courses/>
      </div>
      <Outlet/>
      <div id="arts-labfacilities" className="section">
        <Labfacilities/>
      </div>
      <div id="student-life" className="section">
        <StudentLife/>
      </div>
    <ArtsFooter/>
     {/* WhatsApp icon code */}
     <div className="floating-whatsapp-icon">
        {/* You can add an anchor tag or a button for the WhatsApp link */}
        <a
          href="https://api.whatsapp.com/send/?phone=919087251777&text&type=phone_number&app_absent=0"
          class="floating-whatsapp-icon"
        >
          <i class="fa fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default ArtsAndScience;
