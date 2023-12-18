import React, { useEffect, useState } from 'react'
import "./Nursing.scss"
import NursingNav from './NursingNav/NursingNav';
import { useLocation } from 'react-router-dom';
import NursingBanner from './NursingBanner/NursingBanner';
import About from '../Nursing/About/About.jsx';
import Courses from './Courses/Courses.jsx';
import NursingFooter from './NursingFooter/NursingFooter';
import StudentLife from './Student Life/StudentLife';
import Labfacilities from './LabFacilities/LabFacilities.jsx';
function Nursing() {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState
  (location.hash);

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
    <NursingNav />
    <div id="nursingbanner" className="section">
      <NursingBanner />
    </div>

    {/* Sections */}
    <div id="about" className="section">
      <About />
    </div>
    <div id="courses" className="section">
      <Courses/>
    </div>
    <div id="lab-facilities" className="section">
      <Labfacilities />
    </div>
    <div id="student-life" className="section">
      <StudentLife />
    </div>

    {/* Add more sections for other components */}
    <NursingFooter /> 

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
  )
}

export default Nursing
