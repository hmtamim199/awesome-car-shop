// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEyEq7du6Y2Y2waA2gLsbQocMM0LUVvDI",
  authDomain: "awesome-car-shop-95b1e.firebaseapp.com",
  projectId: "awesome-car-shop-95b1e",
  storageBucket: "awesome-car-shop-95b1e.appspot.com",
  messagingSenderId: "85181648362",
  appId: "1:85181648362:web:7bb8e0386b003a260cb693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;