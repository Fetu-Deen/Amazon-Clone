import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdoTg3ARHRmTp6hVpyNQ4sbqTUCbuLIi8",
  authDomain: "fetudeen--clone.firebaseapp.com",
  projectId: "fetudeen--clone",
  storageBucket: "fetudeen--clone.appspot.com",
  messagingSenderId: "671971710664",
  appId: "1:671971710664:web:2c2f3fcd3937f82d85b7fd",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
