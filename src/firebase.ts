// firebase.js
import { initializeApp } from "firebase/app";
/*import { getAnalytics } from "firebase/analytics"; */
import { getAuth } from "firebase/auth";  // Import Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNR7M1pY_egDTSi9DYEVDcJcgs05bG7AQ",
  authDomain: "rentease-9dcb5.firebaseapp.com",
  projectId: "rentease-9dcb5",
  storageBucket: "rentease-9dcb5.appspot.com",
  messagingSenderId: "379386815231",
  appId: "1:379386815231:web:e792b2e0014a2f47b322ca",
  measurementId: "G-K6D2BJP2FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */

// Initialize Firebase Authentication
export const auth = getAuth(app); // Export auth for use in your app
