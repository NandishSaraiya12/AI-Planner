// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGibGTAeFDuo6bwzsGP9O6raQasrLon8Q",
  authDomain: "ai-planner-f27c7.firebaseapp.com",
  projectId: "ai-planner-f27c7",
  storageBucket: "ai-planner-f27c7.appspot.com",
  messagingSenderId: "368911687120",
  appId: "1:368911687120:web:6e726c8bdf3f9dc1c9add5",
  measurementId: "G-BQFCGH5RF8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db =  getFirestore(app);

