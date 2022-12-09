// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCddgUaykT_B0tZtWgEluSZKkgZHj-FCwo",
  authDomain: "fire-signup-516e0.firebaseapp.com",
  databaseURL: "https://fire-signup-516e0-default-rtdb.firebaseio.com",
  projectId: "fire-signup-516e0",
  storageBucket: "fire-signup-516e0.appspot.com",
  messagingSenderId: "1008779221141",
  appId: "1:1008779221141:web:0647a19139177bbe80e39c",
  measurementId: "G-LNCSZLPDZP"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

