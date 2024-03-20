// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmTv0lHCplmoZHbE_tHVD8-oBPH8jbnUA",
  authDomain: "kooky-nuvemzinha-cloud.firebaseapp.com",
  projectId: "kooky-nuvemzinha-cloud",
  storageBucket: "kooky-nuvemzinha-cloud.appspot.com",
  messagingSenderId: "320542863991",
  appId: "1:320542863991:web:2a8cb85eb3957fded98c72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);