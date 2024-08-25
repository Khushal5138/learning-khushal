// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDVTTeYpHsxH4bJ58iYrSA8w0sKPLybGUM",
//   authDomain: "my-first-project-3ade2.firebaseapp.com",
//   projectId: "my-first-project-3ade2",
//   storageBucket: "my-first-project-3ade2.appspot.com",
//   messagingSenderId: "22892733721",
//   appId: "1:22892733721:web:0ce24789b3bb05cfee5188",
//   measurementId: "G-QKXZ2XQ59X"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVTTeYpHsxH4bJ58iYrSA8w0sKPLybGUM",
    authDomain: "my-first-project-3ade2.firebaseapp.com",
    projectId: "my-first-project-3ade2",
    storageBucket: "my-first-project-3ade2.appspot.com",
    messagingSenderId: "22892733721",
    appId: "1:22892733721:web:0ce24789b3bb05cfee5188",
    measurementId: "G-QKXZ2XQ59X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
