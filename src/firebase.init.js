import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiM0lG_Gxz9TuILWB4GIV0MWD-fGp93Ik",
    authDomain: "fir-authentication-a307e.firebaseapp.com",
    projectId: "fir-authentication-a307e",
    storageBucket: "fir-authentication-a307e.appspot.com",
    messagingSenderId: "91479112911",
    appId: "1:91479112911:web:d57986b739ad4dcc9b8bba"
};

const app = initializeApp(firebaseConfig);
export default app