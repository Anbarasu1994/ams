import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './linkWithThumbnail.scss'; // Import your styles here
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const LinkWithThumbnail = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Fetch links from Firestore when the component mounts
    const firestore = firebase.firestore();
    const linksCollection = firestore.collection('links');

    linksCollection.get().then((querySnapshot) => {
      const linksData = [];
      querySnapshot.forEach((doc) => {
        linksData.push({ id: doc.id, ...doc.data() });
      });
      setLinks(linksData);
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 2000, // Set the slide duration in milliseconds
    afterChange: (currentSlide) => {
      if (currentSlide >= links.length - 3) {
        slider.slickGoTo(0);
      }
    },
  };

  let slider;

  return (
    <div className="link-with-thumbnail">
      <Slider {...settings} ref={(c) => (slider = c)}>
        {links.map((link) => (
          <div key={link.id} className="link-item">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <div className="thumbnail">
                <img src={link.thumbnailSrc} alt="Thumbnail" />
                <div className="details">
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LinkWithThumbnail;
