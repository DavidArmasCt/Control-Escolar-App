// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyDSmuVh2StdhG3Gu6DbvZff3Gg_uCv66pw",
    authDomain: "control-escolar-demo.firebaseapp.com",
    projectId: "control-escolar-demo",
    storageBucket: "control-escolar-demo.appspot.com",
    messagingSenderId: "174460993933",
    appId: "1:174460993933:web:d967c13948025ddcd4fdc4",
    measurementId: "G-5Y8TP9BHXK"

};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp);