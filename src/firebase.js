import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmSi0CyMypVR4houRMZiu1BZR_P3597QY",
    authDomain: "pierwszezadanietheconstruct.firebaseapp.com",
    projectId: "pierwszezadanietheconstruct",
    storageBucket: "pierwszezadanietheconstruct.appspot.com",
    messagingSenderId: "67963642072",
    appId: "1:67963642072:web:30824e30917cbd4b0df7ad",
    measurementId: "G-XNW636XZ5Y"
  };



const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;