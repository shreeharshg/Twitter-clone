import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9mMtU5JtPytYudZFmLS53qRJBg0aMLo0",
  authDomain: "twitter-clone-746b1.firebaseapp.com",
  projectId: "twitter-clone-746b1",
  storageBucket: "twitter-clone-746b1.appspot.com",
  messagingSenderId: "467819840198",
  appId: "1:467819840198:web:8abf080d4c6c6c1cb58dc7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;