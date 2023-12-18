import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './TestimonialsCarousel.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import gallery1 from "../../assets/a-1.jpg";
import gallery2 from "../../assets/a-2.jpg";
import gallery3 from "../../assets/a-3.jpg";
import gallery4 from "../../assets/a-4.jpg";
import gallery5 from "../../assets/a-5.jpg";
import gallery6 from "../../assets/a-6.jpg";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      label: 'NAME 1',
      image: gallery1,
      description: 'Description for photo 1',
    },
    {
      label: 'NAME 2',
      image:  gallery2,
      description: 'Description for photo 2',
    },
    {
      label: 'NAME 3',
      image:  gallery3,
      description: 'Description for photo 3',
    },
    {
      label: 'NAME 4',
      image:  gallery4,
      description: 'Description for photo 4',
    },
    {
      label: 'NAME 5',
      image:  gallery5,
      description: 'Description for photo 5',
    },
    {
      label: 'NAME 6',
      image:  gallery6,
      description: 'Description for photo 6',
    },
  ];

  return (
    <div className="gtco-testimonials1">
      <h2  data-aos="fade-right"><span>TESTIMONIALS </span></h2>
      <OwlCarousel
        className="owl-carousel1 owl-theme"
        loop
        center
        margin={0}
        responsiveClass
        nav={false}
        autoplay // Enable autoplay
        autoplayTimeout={2000} // Set autoplay interval to 2 seconds
        responsive={{
          0: {
            items: 1,
            nav: false,
          },
          680: {
            items: 2,
            nav: false,
            loop: false,
          },
          1000: {
            items: 3,
            nav: true,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="card text-center">
              <img className="card-img-top" src={testimonial.image} alt="" />
              <div className="card-body">
                <h5>
                  {testimonial.label} <br />
                  <span>{testimonial.description}</span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default TestimonialsCarousel;
