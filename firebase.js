// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhNMkMsSILCzhNHTOytPf_UgDRh2Lc8fc",
  authDomain: "newmediumclone.firebaseapp.com",
  projectId: "newmediumclone",
  storageBucket: "newmediumclone.appspot.com",
  messagingSenderId: "85316226975",
  appId: "1:85316226975:web:1f710fe77e747d114a77aa",
  measurementId: "G-7HBPR70656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)


export { auth , provider , db  }