// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYwa6LtcVQzkYfwWOtJ4n39qYUucLwWaE",
  authDomain: "donation-campaign-7d295.firebaseapp.com",
  projectId: "donation-campaign-7d295",
  storageBucket: "donation-campaign-7d295.appspot.com",
  messagingSenderId: "695625283749",
  appId: "1:695625283749:web:47d84556bf1b92f914b54c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;