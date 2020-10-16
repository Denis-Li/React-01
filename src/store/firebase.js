import * as firebase from 'firebase';





const config = {
  apiKey: "AIzaSyDvSTGid6W_b3_xpprZLc_92OJKghuQjcY",
  authDomain: "realestate-84150.firebaseapp.com",
  databaseURL: "https://realestate-84150.firebaseio.com",
  projectId: "realestate-84150",
  storageBucket: "realestate-84150.appspot.com",
  messagingSenderId: "758331665855",
  appId: "1:758331665855:web:73dbad14b49ad3ccca050a"
};
// Initialize Firebase
let fireDb = firebase.initializeApp(config);

export default fireDb
