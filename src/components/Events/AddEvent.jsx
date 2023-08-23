import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "./addEvent.scss";
const AddEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get a reference to the Firestore database
    const db = firebase.firestore();

    // Add event details to Firestore
    db.collection("Event")
      .add({
        name: eventName,
        date: eventDate,
      })
      .then(() => {
        console.log("Event added successfully");
        setEventName("");
        setEventDate("");
      })
      .catch((error) => {
        console.error("Error adding event: ", error);
      });
  };

  return (
    <div className="addevent-wrapper">
      <h2>Add Upcoming Event</h2>
      <form onSubmit={handleSubmit}>
        <label>Event Name:</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />

        <br />
        <label>Event Date:</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        /><br/><br/>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
