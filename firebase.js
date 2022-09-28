// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEsYon0e1PjuZQFfEW2IEEoqUqD2Fhb50",
  authDomain: "farmersmarket-74c2c.firebaseapp.com",
  projectId: "farmersmarket-74c2c",
  storageBucket: "farmersmarket-74c2c.appspot.com",
  messagingSenderId: "200259287678",
  appId: "1:200259287678:web:377369ac1d01e03a6fb62f",
  measurementId: "G-WYWCBW3B0Q"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage =getStorage();
const auth = getAuth()

export { app, db, auth, storage}