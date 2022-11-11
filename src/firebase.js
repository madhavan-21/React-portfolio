// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO4pFS8MfbLEWyYbNqmvtQXWW4a1NCgDs",
  authDomain: "react-portfolio-dashboar-743f8.firebaseapp.com",
  projectId: "react-portfolio-dashboar-743f8",
  storageBucket: "react-portfolio-dashboar-743f8.appspot.com",
  messagingSenderId: "171198430541",
  appId: "1:171198430541:web:5af517a51a0cf136c88b04",
  measurementId: "G-NGLTP30Y9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);