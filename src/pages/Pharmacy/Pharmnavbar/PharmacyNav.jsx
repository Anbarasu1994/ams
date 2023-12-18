import React, { useState, useEffect } from 'react';
import pharmacy from '../../../assets/pharmacy.png';
import './PharmNav.scss';
import Scrollspy from 'react-scrollspy';
const PharmacyNav = () => {
  const [activeLink, setActiveLink] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveLink(section.getAttribute('data-link'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="NavBarPharmacy">
      <nav className="navbarph">
        <div className="logo-container">
          <div className="logo">
            <img src={pharmacy} alt="" height={100} width={100} />
          </div>
          <div className="logo-txt">
            <h1>ANNAI COLLEGE OF PHARMACY</h1>
          </div>
        </div>
        <div className="menu">
          <Scrollspy
            items={['about', 'courses', 'lab-facilities', 'student-life']}
            currentClassName="active"
          >
             
            
              <a href="#about">ABOUT</a>
          
           
              <a href="#courses">COURSES</a>
           
           
              <a href="#lab-facilities">LAB FACILITIES</a>
            
           
              <a href="#student-life">STUDENT LIFE</a>
           
          </Scrollspy>
        </div>
      </nav>
    </div>
  );
};

export default PharmacyNav;
