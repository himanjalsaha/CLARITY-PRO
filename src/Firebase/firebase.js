// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhqGCXVtyaYhdYEGIHkap98S_c9-eStEM",
  authDomain: "clarity-pro.firebaseapp.com",
  projectId: "clarity-pro",
  storageBucket: "clarity-pro.appspot.com",
  messagingSenderId: "770470090707",
  appId: "1:770470090707:web:5fab999d759e9c4b1a0126",
  measurementId: "G-ZXT3PSGFJ1"
};
{console.log(firebaseConfig);}
// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const analytics = getAnalytics(app);
export const db  = getFirestore();