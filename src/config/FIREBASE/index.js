import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyCnqCgHyVu1VpN8CWGxRwd04yU4KOT_nhA",
  authDomain: "pabmodul9glori.firebaseapp.com",
  databaseURL: "https://pabmodul9glori-default-rtdb.firebaseio.com/",
  projectId: "pabmodul9glori",
  storageBucket: "pabmodul9glori.appspot.com",
  messagingSenderId: "495732304320",
  appId: "1:495732304320:web:ab98d8d7d4429078778025 ;) "
});

const FIREBASE = firebase;

export default FIREBASE;