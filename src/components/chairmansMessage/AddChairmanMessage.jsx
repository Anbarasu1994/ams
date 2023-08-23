import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const AddChairmanMessage = () => {
  const [message, setMessage] = useState("");

  const handleAddMessage = () => {
    if (!message) {
      return;
    }

    // Initialize Firebase
    if (!firebase.apps.length) {
      const firebaseConfig = {
        // Your Firebase config details
      };
      firebase.initializeApp(firebaseConfig);
    }

    // Get a reference to the Firestore database
    const db = firebase.firestore();

    // Add chairman's message to Firestore
    db.collection("Messages")
      .doc("chairmanMessage")
      .set({
        message: message,
      })
      .then(() => {
        console.log("Chairman's message added successfully!");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error adding chairman's message: ", error);
      });
  };

  return (
    <div>
      <h2>Add Chairman's Message</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={handleAddMessage}>Add Message</button>
    </div>
  );
};

export default AddChairmanMessage;
