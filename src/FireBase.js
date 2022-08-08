// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9WQ38tZ3FoxOTwLWpb9BKDTJ9CEP7Opw",
  authDomain: "rnwreact.firebaseapp.com",
  projectId: "rnwreact",
  storageBucket: "rnwreact.appspot.com",
  messagingSenderId: "1046407822196",
  appId: "1:1046407822196:web:420250bee652e8a94e4a21",
  measurementId: "G-2SK13CG56R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);