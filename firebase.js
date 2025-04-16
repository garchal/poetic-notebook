
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdfcf1LBcR0WkMQcGd1DLJ6tF3nxPZvWI",
  authDomain: "poetic-notebook.firebaseapp.com",
  projectId: "poetic-notebook",
  storageBucket: "poetic-notebook.firebasestorage.app",
  messagingSenderId: "568335343667",
  appId: "1:568335343667:web:0a8571272824ad857b0346"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
