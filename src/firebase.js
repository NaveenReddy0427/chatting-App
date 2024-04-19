import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPXtDtGGA23-RJJHeX3kBYglXbrm9KJwU",
  authDomain: "private-chatting-app-eeea2.firebaseapp.com",
  projectId: "private-chatting-app-eeea2",
  storageBucket: "private-chatting-app-eeea2.appspot.com",
  messagingSenderId: "526908995034",
  appId: "1:526908995034:web:31b2f2ca3664935a253ce3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
