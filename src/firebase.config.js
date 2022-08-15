
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Import the functions you need from the SDKs you need

//  TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDffCigtCYHb4jEX-pMUuQNZNCKYENUBns",
  authDomain: "house-marketplace-app-71108.firebaseapp.com",
  projectId: "house-marketplace-app-71108",
  storageBucket: "house-marketplace-app-71108.appspot.com",
  messagingSenderId: "867405456572",
  appId: "1:867405456572:web:b26e3f780691049b0e1cb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();