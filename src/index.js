import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAuk4SlWG6mL0PdYRkJrlNrGciTu_-T5u0",
  authDomain: "annai-college-4334f.firebaseapp.com",
  projectId: "annai-college-4334f",
  storageBucket: "annai-college-4334f.appspot.com",
  messagingSenderId: "1023119807741",
  appId: "1:1023119807741:web:15cc86ef2f2a36ff345a94",
  measurementId: "G-7MYQHKKDMM"
};
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
