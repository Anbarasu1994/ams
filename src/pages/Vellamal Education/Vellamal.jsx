import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import "./Vellamal.scss"; // Import the SCSS file
import "font-awesome/css/font-awesome.min.css";


import VellamalNav from "./VellamalNav/VellamalNav.jsx";
import About from "./About/About";
import VellamalBanner from "./VellamalBanner.jsx/VellamalBanner";
import Courses from "./Courses/Courses";
import VellamalFooter from "./VellamalFooter/VellamalFooter";
import StudentLife from "./StudentLife/StudentLife";

const Vellamal = () => {
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
    <div className="PharmacyCollege">
      {/* Your navigation component */}
      <VellamalNav />
      <div id="vellamalbanner" className="section">
        <VellamalBanner />
      </div>

      {/* Sections */}
      <div id="about" className="section">
        <About />
      </div>
      <div id="courses-vellamal" className="section">
        <Courses />
      </div>
      <div id="lab-facilities" className="section">
        {/* <LabFacilities /> */}
      </div>
      <div id="student-life" className="section">
        <StudentLife />
      </div>

      {/* Add more sections for other components */}
      <VellamalFooter />

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

export default Vellamal;
