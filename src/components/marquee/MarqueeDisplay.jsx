import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './marqueeDisplay.scss'; // Import your styles here

const MarqueeDisplay = () => {
  const [marquees, setMarquees] = useState([]);

  useEffect(() => {
    const firestore = firebase.firestore();
    const marqueeCollection = firestore.collection('marquees'); // Change 'marquees' to your Firestore collection name

    marqueeCollection.orderBy('timestamp', 'desc').limit(1).get()
      .then((querySnapshot) => {
        const marqueeData = [];
        querySnapshot.forEach((doc) => {
          marqueeData.push({ id: doc.id, ...doc.data() });
        });
        setMarquees(marqueeData);
      })
      .catch((error) => {
        console.error('Error fetching marquee:', error);
      });
  }, []);

  return (
    <div className="marquee-display" style={{
      color:"white"
    }}>
   
      <marquee className="marquee-text"  behavior="" direction="ritght-to-left" >
        {marquees.length > 0 ? <a>{marquees[0].text}</a> : <p>No marquee available</p>}
        </marquee>
      </div>
   
  );
};

export default MarqueeDisplay;
