import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD6T8EJfVrE0TAw2RO6Cx1owPPBI3o0lTA",
    authDomain: "react-native-firebase-9d8be.firebaseapp.com",
    projectId: "react-native-firebase-9d8be",
    storageBucket: "react-native-firebase-9d8be.appspot.com",
    messagingSenderId: "581980656313",
    appId: "1:581980656313:web:8d7fa8b7cff8b53e180168"
  };
  
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export default {firebase, db,}