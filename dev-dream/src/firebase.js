// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDlLKBeZkO_l7Qi65MVq6lH9Z3w8c28Fc",
  authDomain: "devdream-8de97.firebaseapp.com",
  projectId: "devdream-8de97",
  storageBucket: "devdream-8de97.appspot.com",
  messagingSenderId: "653537889236",
  appId: "1:653537889236:web:28e93f3fc378c1c86c2441",
  measurementId: "G-4FM9MNW191",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
