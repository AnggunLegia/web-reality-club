// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAT1-J6oIbSC9UqVGkNJybnrN5ntenkyEI",
  authDomain: "projectweb-117ef.firebaseapp.com",
  projectId: "projectweb-117ef",
  storageBucket: "projectweb-117ef.appspot.com",
  messagingSenderId: "259809276514",
  appId: "1:259809276514:web:e07e78bf9a3124f924d73b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db= getFirestore(app);
export const storage= getStorage(app);