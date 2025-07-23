// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXCm8eC5FKxNPw4BJeuoX5vYFNgUT9EOE",
  authDomain: "final-project-4-727ea.firebaseapp.com",
  projectId: "final-project-4-727ea",
  storageBucket: "final-project-4-727ea.firebasestorage.app",
  messagingSenderId: "167317797953",
  appId: "1:167317797953:web:7b4cd38706849ccdd65ac0",
  measurementId: "G-X43270BES2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};