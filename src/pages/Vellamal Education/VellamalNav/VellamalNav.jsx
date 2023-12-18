import React, { useState, useEffect } from 'react';
import vellamal from '../../../assets/vellamal college.png';
import './VellamalNav.scss';
import Scrollspy from 'react-scrollspy';
const VellamalNav = () => {
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
    <div className="NavBarVellamal">
      <nav className="navbarVellamal">
        <div className="logo-container">
          <div className="logo">
            <img src={vellamal} alt="" height={100} width={100} />
          </div>
          <div className="logo-txt">
            <h1>VELLAMAL COLLEGE OF EDUCATION</h1>
          </div>
        </div>
        <div className="menu">
          <Scrollspy
            items={['about', 'courses-vellamal', 'lab-facilities', 'student-life']}
            currentClassName="active"
          >
             
            
              <a href="#about">ABOUT</a>
          
           
              <a href="#courses-vellamal">COURSES</a>
           
           
              <a href="#lab-facilities">LAB FACILITIES</a>
            
           
              <a href="#student-life">STUDENT LIFE</a>
           
          </Scrollspy>
        </div>
      </nav>
    </div>
  );
};

export default VellamalNav;
