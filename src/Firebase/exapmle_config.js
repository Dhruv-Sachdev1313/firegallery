// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "<your api key>",
  authDomain: "<your auth domain>",
  projectId: "<your project id>",
  storageBucket: "<your storage backet>",
  messagingSenderId: "<your messging id",
  appId: "<your appId>"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);