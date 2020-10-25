import * as firebase from 'firebase';





const firebaseConfig = {
    apiKey: "AIzaSyDW2Odm_4Rkp2Q1h7BpRBCh3ZxFC3i6Knk",
    authDomain: "exchange-9bcd3.firebaseapp.com",
    databaseURL: "https://exchange-9bcd3.firebaseio.com",
    projectId: "exchange-9bcd3",
    storageBucket: "exchange-9bcd3.appspot.com",
    messagingSenderId: "319108181655",
    appId: "1:319108181655:web:92336ed265c60f35f383d2"
  };
// Initialize Firebase
let fireDbDen = firebase.initializeApp(firebaseConfig);

export default fireDbDen
