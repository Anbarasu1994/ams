import React, { useEffect, useState } from "react";
import "./chairmansMessage.scss"; // Add your updated SCSS file here
import certificate from "../../assets/chairman.jpg";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import AOS from "aos";
import "aos/dist/aos.css";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const ChairmansMessage = () => {
  let typingSpeed = 40;

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFetchingMessage, setIsFetchingMessage] = useState(true);

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

    // Fetch chairman's message from Firestore
    db.collection("Messages") // Change this to the actual collection name
      .doc("chairmanMessage") // Change this to the actual document ID
      .get()
      .then((doc) => {
        if (doc.exists) {
          const message = doc.data().message;
          setDisplayText(message);
          setIsFetchingMessage(false); // Set fetching state to false after message is fetched
          // startTypewriter(message);
        } else {
          console.log("No chairman's message available");
        }
      })
      .catch((error) => {
        console.error("Error fetching chairman's message: ", error);
      });

    // Initialize AOS after fetching the message
    AOS.init();
  }, []);

  useEffect(() => {
    if (!isFetchingMessage && currentIndex < displayText.length) {
      const timeout = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex + 1 <= displayText.length ? prevIndex + 1 : prevIndex
          ),
        typingSpeed
      );

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, typingSpeed, displayText, isFetchingMessage]);

  return (
    <div className="chairman-wrapper">

    <div className="chairman-1">
    <div className="vertical-line2"></div>
    <div className="vertical-line3"></div>


      <div
        className="chairman-logo"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <img src={certificate} alt="" />
      </div>
      <div className="chairmanMsg">
        <div className="chairman-title" data-aos="fade-left">
          <h3> student experience to the next level</h3>
        </div>
        <div className="message">
          <h3
            style={{
              color: "white",
            }}
          >
            Amigos,
          </h3>
          <p
            style={{
              color: "white",
              marginTop: "2%",
              fontSize: "20px",
              fontFamily: "monospace",
              height: "120px", // Set a fixed height for the paragraph
              overflow: "hidden", // Hide any overflowing content
              display: "flex", // Use flex display for vertical alignment
              // flexDirection: "column", // Stack text content vertically
              // justifyContent: "flex-start", // Align text at the top
            }}
          >
            {displayText.slice(0, currentIndex)}
          </p>
          <p
            style={{
              color: "white",
              marginLeft: "5%",
              marginTop: "2%",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            -Chairman
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChairmansMessage;
