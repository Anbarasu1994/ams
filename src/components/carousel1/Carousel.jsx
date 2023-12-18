import React, { useEffect, useState } from "react";
import "./carousel.scss";

import lib from "../../assets/library.jpg"
import nurse from "../../assets/Nursing1.jpg"


const slides = [
  { url: lib, title: "beach" },
  { url: nurse, title: "beach" },
  { url: nurse, title: "beach" },

  { url: nurse, title: "beach" },

  { url: nurse, title: "beach" },



];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const interval = setInterval(goToNext, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="slider-wrapper">
    <div className="slider-container">
      <div className="arrow left-arrow" onClick={goToPrevious}>
        ❰
      </div>
      <div className="arrow right-arrow" onClick={goToNext}>
        ❱
      </div>
      <div className="slide" style={slideStylesWidthBackground}></div>
      <div className="dots-container">
        {slides.map((slide, slideIndex) => (
          <div
            className={`dot ${currentIndex === slideIndex ? "active" : ""}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Carousel;
