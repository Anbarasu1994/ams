import React, { useState, useEffect } from "react";
import "./campusTour.scss";
import nss from "../../assets/nss.jpg";
import yrc from "../../assets/yrc.jpg";
import sna from "../../assets/sna.jpg";
import library from "../../assets/library.jpg";
import internship from "../../assets/internship.jpg";
import sports from "../../assets/sportsImage.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import Video from "../video/Video";
function CampusTour() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide % 6) + 1;
      setCurrentSlide(nextSlide);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const imageHoverText = [
    "NSS Activities",
    "YRC Events",
    "SNA Events",
    "Library Facilities",
    "Internship Opportunities",
    "Sports and Recreation",
  ];
  return (
    <div className="CampusTourwrapper">
      <div className="campusTour-title">
        <h3 data-aos="fade-right">
          <span>CAMPUS TOUR</span>
        </h3>
      </div>
      <div className="video">
        <Video />
      </div>
      <div className="container__slider-CampusTourwrapper">
        <div className="container">
          {[1, 2, 3, 4, 5, 6].map((slideNumber) => (
            <input
              key={`slider-${slideNumber}`}
              type="radio"
              name="slider"
              id={`item-${slideNumber}`}
              checked={currentSlide === slideNumber}
              onChange={() => setCurrentSlide(slideNumber)}
            />
          ))}

          <div className="cards">
            {[nss, yrc, sna, library, internship, sports].map(
              (imageSrc, index) => (
                <label
                  key={`card-${index}`}
                  className="card"
                  htmlFor={`item-${index + 1}`}
                  id={`selector-${index + 1}`}
                >
                  <img src={imageSrc} alt={`Slide ${index + 1}`} />
                  <div className="hover-text">{imageHoverText[index]}</div>
                </label>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampusTour;
