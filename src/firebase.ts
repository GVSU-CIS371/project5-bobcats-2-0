import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCx3O7zO97ORRGwClNoGFY-eENqbBoRMRQ",
    authDomain: "webdev-project5.firebaseapp.com",
    projectId: "webdev-project5",
    storageBucket: "webdev-project5.firebasestorage.app",
    messagingSenderId: "176860175743",
    appId: "1:176860175743:web:5b8bb15640749e83984e4a",
    measurementId: "G-F7X19QV78M"
  };
  
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig)
const db: Firestore = getFirestore(firebaseApp)

export { firebaseApp, db };