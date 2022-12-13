import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC5rml3JDgdAB41n45sPLe8ypFsOYv4Wmk",
  authDomain: "dashboard-43485.firebaseapp.com",
  projectId: "dashboard-43485",
  storageBucket: "dashboard-43485.appspot.com",
  messagingSenderId: "874400872794",
  appId: "1:874400872794:web:ae4f2b39c99a7e3fafdb63"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const userAuth = getAuth();
const adminAuth = getAuth();

export {app, db, userAuth, adminAuth}