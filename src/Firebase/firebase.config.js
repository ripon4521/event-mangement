// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDChXCklUK-q3N1vE-IFPlU3MiuOOnrR44",
  authDomain: "dragon-news-b2e3b.firebaseapp.com",
  projectId: "dragon-news-b2e3b",
  storageBucket: "dragon-news-b2e3b.appspot.com",
  messagingSenderId: "623040722655",
  appId: "1:623040722655:web:f64211b2d7d13bab16db6a"
  
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
