import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDVRSuh8tBLegdD40fh66VAwDah-eVvSDg",
  authDomain: "clone-3edc9.firebaseapp.com",
  databaseURL: "https://clone-3edc9.firebaseio.com",
  projectId: "clone-3edc9",
  storageBucket: "clone-3edc9.appspot.com",
  messagingSenderId: "853724647542",
  appId: "1:853724647542:web:69b72d38a54f1dfdcccf57",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
