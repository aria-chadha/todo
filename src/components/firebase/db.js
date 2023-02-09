import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB--0ZhKY2BwM6eXWbBZL70Lth_4JibWYI",
    authDomain: "todo-firebase-6a2fc.firebaseapp.com",
    projectId: "todo-firebase-6a2fc",
    storageBucket: "todo-firebase-6a2fc.appspot.com",
    messagingSenderId: "395690077098",
    appId: "1:395690077098:web:b89baa0e4a705c668f99d3"
  };
  
export const db = firebase.initializeApp(firebaseConfig).firestore();
export const auth = firebase.auth();

