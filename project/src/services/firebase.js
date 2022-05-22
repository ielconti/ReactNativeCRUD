import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu6HaAq-dzK2GfLaZ1qgEdNDxkzTnMfqw",
  authDomain: "reactnativecrud-d8345.firebaseapp.com",
  projectId: "reactnativecrud-d8345",
  storageBucket: "reactnativecrud-d8345.appspot.com",
  messagingSenderId: "490142691169",
  appId: "1:490142691169:web:8ab0d6ae27513b6c3ddf20"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app, { experimentalForceLongPolling: true });