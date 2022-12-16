import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPv0lqhEFQxfQrgVBYKh-arVkFEsFnxYc",
  authDomain: "dashboard2-64658.firebaseapp.com",
  projectId: "dashboard2-64658",
  storageBucket: "dashboard2-64658.appspot.com",
  messagingSenderId: "1009213605956",
  appId: "1:1009213605956:web:5ce106247dfabb6e911411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const storage = getStorage(app);
const database = getFirestore(app);
const userAuth = getAuth();

export {app, db, storage, database, userAuth};