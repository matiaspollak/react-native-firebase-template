import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCWSezW_UHOulJ0I_DPFdMl3QUDZnnIx34",
    authDomain: "book-sn.firebaseapp.com",
    databaseURL: "https://book-sn.firebaseio.com",
    projectId: "book-sn",
    storageBucket: "book-sn.appspot.com",
    messagingSenderId: "410143433142",
    appId: "1:410143433142:web:5ccc997e0ce2ad2348a117",
    measurementId: "G-NP037NGWZB"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };