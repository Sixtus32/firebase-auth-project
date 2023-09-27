// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjXKy4tsTDak_XTQ8igpjHTQxWFkEGg0I",
    authDomain: "fir-auth-project-6d85f.firebaseapp.com",
    projectId: "fir-auth-project-6d85f",
    storageBucket: "fir-auth-project-6d85f.appspot.com",
    messagingSenderId: "571796903434",
    appId: "1:571796903434:web:979872ada45610af24f1f3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log(app)
console.log("connected with firebase");

// initialize Firebase Auth
export const auth = getAuth(app);
console.log(auth);
console.log("connected with firebase auth");
