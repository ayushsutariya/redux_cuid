import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../FireBase';

export function SignApi(data) {
    return new Promise ((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    })

}

export default SignApi;