import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
console.log("sign-in-form loaded");
import { auth } from './firebase.js';

const signIn = document.querySelector('#signin-form');
signIn.addEventListener('submit', async (e) => {
    e.preventDefault(); // Cancela el efecto de reniciar la pagina

    const email=signIn['sign-in-email'].value;
    const password=signIn['sign-in-password'].value;

    console.log(email);
    console.log(password);

    try{
        const userCredencial = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredencial);

        const signInModal = document.querySelector("#sign-in-modal");
        // Cierre del modal de registros
        const modal = bootstrap.Modal.getInstance(signInModal);
        modal.hide();
    }catch (error) {
        console.log(error.message);
        console.log(error.code);

        if(error.code === 'auth/invalid-email'){
            alert("El correo electrónico ingresado no es válido");
        }else if(error.code === 'auth/wrong-password'){
            alert("La contraseña ingresada es incorrecta");
        }
        // Por si existe cualquier tipo de error DESCONOCIDO.
        else if(error.code){

        }
    }
})