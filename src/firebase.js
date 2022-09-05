import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirebase, getFirestore} from 'firebase/firestore'

const firebasConfig = {
  apiKey: "AIzaSyCmSi0CyMypVR4houRMZiu1BZR_P3597QY",
  authDomain: "pierwszezadanietheconstruct.firebaseapp.com",
  projectId: "pierwszezadanietheconstruct",
  storageBucket: "pierwszezadanietheconstruct.appspot.com",
  messagingSenderId: "67963642072",
  appId: "1:67963642072:web:c71f48f7b974b3170df7ad",
  measurementId: "G-K7L8T8W865"
};

const app = initializeApp(firebasConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app;