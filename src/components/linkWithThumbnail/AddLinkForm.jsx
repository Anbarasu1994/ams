import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "./addlinkForm.scss"

const AddLinkForm = () => {
  const [url, setUrl] = useState('');
  const [thumbnailSrc, setThumbnailSrc] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLink = {
      url,
      thumbnailSrc,
      title,
      description,
    };

    const firestore = firebase.firestore();
    const linksCollection = firestore.collection('links'); // Change 'links' to your Firestore collection name

    linksCollection
      .add(newLink)
      .then(() => {
        console.log('Link added successfully!');
        // Reset form fields after successful submission
        setUrl('');
        setThumbnailSrc('');
        setTitle('');
        setDescription('');
      })
      .catch((error) => {
        console.error('Error adding link:', error);
      });
  };

  return (
    <div className="add-link-form">
      <h2>Add New Link</h2>
      <form onSubmit={handleSubmit}>
        <label>
          URL:
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </label>
        <label>
          Thumbnail Source:
          <input type="text" value={thumbnailSrc} onChange={(e) => setThumbnailSrc(e.target.value)} />
        </label>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Add Link</button>
      </form>
    </div>
  );
};

export default AddLinkForm;
