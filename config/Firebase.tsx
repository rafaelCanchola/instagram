import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
require('firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyCZZCnfAPL9Rb9iSL6kcd_8_IkWZhzkJj0",
    authDomain: "react-clone-instag.firebaseapp.com",
    projectId: "react-clone-instag",
    storageBucket: "react-clone-instag.appspot.com",
    messagingSenderId: "766853847886",
    appId: "1:766853847886:web:2823db3f1d6b07dddd1c1f"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;



