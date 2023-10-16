// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtmz1Fqszow1xhJL7MBN4jG0Rl2zG8vLg",
  authDomain: "coffee-store-f51db.firebaseapp.com",
  projectId: "coffee-store-f51db",
  storageBucket: "coffee-store-f51db.appspot.com",
  messagingSenderId: "989656225104",
  appId: "1:989656225104:web:c4fc4f35d03fab80b34855"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;