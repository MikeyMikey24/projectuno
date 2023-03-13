// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXrHf8mAjg6rKJnwVfQMkLS7Jes5YGfCY",
  authDomain: "projectuno-fd1bc.firebaseapp.com",
  projectId: "projectuno-fd1bc",
  storageBucket: "projectuno-fd1bc.appspot.com",
  messagingSenderId: "503973962053",
  appId: "1:503973962053:web:ba41c644bddec6bffd9e2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)