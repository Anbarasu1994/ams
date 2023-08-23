import React, { useEffect, useState, useRef } from "react";
import "./upcomingEvents.scss";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import AOS from "aos";
import "aos/dist/aos.css";
import LinkWithThumbnail from "../linkWithThumbnail/LinkWithThumbnail";

const UpcomingEvents = ({ children }) => {
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
    <div className="upcomingEvents-wrapper">
      <div className="upcomingEvents">
        <div className="upcoming-title">
          <h3 data-aos="fade-right">
            <span> EVENTS </span>
          </h3>
        </div>
        <div className="events-wrapper">
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
          <div className="linkWithThumbnail">
            <LinkWithThumbnail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
