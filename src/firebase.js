import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBze-eUH3fPHOuCp5kHavk99CACVFsZsFY",
  authDomain: "fir-1b10c.firebaseapp.com",
  projectId: "fir-1b10c",
  storageBucket: "fir-1b10c.appspot.com",
  messagingSenderId: "624296764957",
  appId: "1:624296764957:web:d4f593156752712f91c8f4",
  measurementId: "G-CXFRQYJ9NG",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
