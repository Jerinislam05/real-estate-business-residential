// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLOyfya6ZWJ3FmD2udTTYYg7-gSz_Kz5c",
  authDomain: "real-estate-residential-7af62.firebaseapp.com",
  projectId: "real-estate-residential-7af62",
  storageBucket: "real-estate-residential-7af62.appspot.com",
  messagingSenderId: "693800909343",
  appId: "1:693800909343:web:74fd99e876e2be8f20332a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export default app;