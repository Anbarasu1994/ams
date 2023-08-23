import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./TopperCarousel.scss"

import gallery1 from "../../assets/a-1.jpg";
import gallery2 from "../../assets/a-2.jpg";
import gallery3 from "../../assets/a-3.jpg";

const TopperCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gallery1}
          alt="Image 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gallery2}
          alt="Image 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gallery3}
          alt="Image 3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default TopperCarousel;
