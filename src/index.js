import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJfRIrScd4u4JEQ613k72RlMh-68IRkh0",
  authDomain: "personal-portfolio-b75f8.firebaseapp.com",
  databaseURL: "https://personal-portfolio-b75f8.firebaseio.com",
  projectId: "personal-portfolio-b75f8",
  storageBucket: "personal-portfolio-b75f8.appspot.com",
  messagingSenderId: "531467221910",
  appId: "1:531467221910:web:25fa28f07d5c31199e7bb7",
  measurementId: "G-MLSPFD0TK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
