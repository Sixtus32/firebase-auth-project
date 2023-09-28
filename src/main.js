import { auth } from './app/firebase.js';
import './app/signupForm.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import './app/signinForm.js';
import './app/logout.js';
import { loginCheck } from './app/login_check.js';

console.log('Hello World!');

onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
    // if(user){
    //     loginCheck(user);
    // }else{
    //     loginCheck(user)
    // }
});


