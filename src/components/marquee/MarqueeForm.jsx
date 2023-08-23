import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './marqueeForm.scss'; // Import your styles here

const MarqueeForm = () => {
  const [marqueeText, setMarqueeText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMarquee = {
      text: marqueeText,
      timestamp: new Date(),
    };

    const firestore = firebase.firestore();
    const marqueeCollection = firestore.collection('marquees'); // Change 'marquees' to your Firestore collection name

    marqueeCollection
      .add(newMarquee)
      .then(() => {
        console.log('Marquee added successfully!');
        setMarqueeText('');
      })
      .catch((error) => {
        console.error('Error adding marquee:', error);
      });
  };

  return (
    <div className="marquee-form">
      <h2>Post Marquee Text to Firebase</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Marquee Text:
          <textarea
            value={marqueeText}
            onChange={(e) => setMarqueeText(e.target.value)}
            placeholder="Enter marquee text..."
            rows={4}
            cols={50}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MarqueeForm;
