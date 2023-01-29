// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtUvpd9ISFxHH8-1MukA2lxLCYLtWokjA",
  authDomain: "docs-clone-8f20c.firebaseapp.com",
  projectId: "docs-clone-8f20c",
  storageBucket: "docs-clone-8f20c.appspot.com",
  messagingSenderId: "959429754240",
  appId: "1:959429754240:web:21fc6b07396def21705565",
  measurementId: "G-SDL3B65N45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);