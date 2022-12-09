import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCjD4bEJ3idTYZxsgQYm7w7cgp83piNgPM",
  authDomain: "elibrary-510b1.firebaseapp.com",
  projectId: "elibrary-510b1",
  storageBucket: "elibrary-510b1.appspot.com",
  messagingSenderId: "863089842041",
  appId: "1:863089842041:web:8689088a6321a8331901a8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
