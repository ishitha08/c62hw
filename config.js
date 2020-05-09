import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCpRINV_P-5rz8dkeS75VEPteO1icX0IFk",
    authDomain: "buzzer-app-fe54b.firebaseapp.com",
    databaseURL: "https://buzzer-app-fe54b.firebaseio.com",
    projectId: "buzzer-app-fe54b",
    storageBucket: "buzzer-app-fe54b.appspot.com",
    messagingSenderId: "87789590644",
    appId: "1:87789590644:web:c0a8f6cc67540ef80bd921",
    measurementId: "G-JLENRSMHB9"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
