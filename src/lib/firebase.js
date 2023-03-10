import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB2VhEHxBi83xUseyTdFiXr6MbkapR2O38",
    authDomain: "brian-fouts-com.firebaseapp.com",
    projectId: "brian-fouts-com",
    storageBucket: "brian-fouts-com.appspot.com",
    messagingSenderId: "8772945826",
    appId: "1:8772945826:web:51ed834850a049675c54fb",
    measurementId: "G-6K7XQJMPX4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();