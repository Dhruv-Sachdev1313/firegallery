// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
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
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };