// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBilDEy38HFt6pwtEMojJJrVT3Ykha24ps",
  authDomain: "dashboard-12f9b.firebaseapp.com",
  projectId: "dashboard-12f9b",
  storageBucket: "dashboard-12f9b.firebasestorage.app",
  messagingSenderId: "791503586859",
  appId: "1:791503586859:web:786fd9cd4edc8f9bb2cc6e",
  databaseURL:'https://dashboard-12f9b-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);