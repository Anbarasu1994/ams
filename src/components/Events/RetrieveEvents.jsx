import React, { useState, useEffect } from 'react';
import "./retrieveEvents.scss";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function RetrieveEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Initialize Firebase
    if (!firebase.apps.length) {
      const firebaseConfig = {
        // Your Firebase config details
      };
      firebase.initializeApp(firebaseConfig);
    }

    // Get a reference to the Firestore database
    const db = firebase.firestore();

    // Fetch event details from Firestore
    db.collection("Event")
      .get()
      .then((querySnapshot) => {
        const eventList = [];
        querySnapshot.forEach((doc) => {
          eventList.push(doc.data());
        });
        setEvents(eventList);
      })
      .catch((error) => {
        console.error("Error fetching events: ", error);
      });
  }, []);

  return (
    <div className="retrieveEvents-wrapper">
      <div className="retrieveEvents">
        <div className="upcoming-title">
          <h3 data-aos="fade-up" data-aos-duration="3000">
            <span>UPCOMING EVENTS </span>
          </h3>
        </div>
        <div className="notepad-bg">
          <div className="scrolling-events-container">
            <div className="list-view">
              <ul className="scrolling-events-list">
                {events.map((event, index) => (
                  <li key={index}>
                      {event.date} - {event.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RetrieveEvents;
