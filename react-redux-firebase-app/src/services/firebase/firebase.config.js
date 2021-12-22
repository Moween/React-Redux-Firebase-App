// Import the functions you need from the SDKs you need
import firebase   from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4saxEnYaAkHUsaxsWRFPwIpCYSXxyCkA",
  authDomain: "events-72a59.firebaseapp.com",
  projectId: "events-72a59",
  storageBucket: "events-72a59.appspot.com",
  messagingSenderId: "203091800149",
  appId: "1:203091800149:web:915a00c320dd3e37c224dc",
  measurementId: "G-J5S0TTRH15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.firestore();