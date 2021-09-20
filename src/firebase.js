import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyBhFf3_3WrcLHcCAxZVgTdDr_6iacsXtwM",
  authDomain: "whatsappclone-3beb3.firebaseapp.com",
  projectId: "whatsappclone-3beb3",
  storageBucket: "whatsappclone-3beb3.appspot.com",
  messagingSenderId: "268175123818",
  appId: "1:268175123818:web:25a022e1bc0b8402adf113"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
