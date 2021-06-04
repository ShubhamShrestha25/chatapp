import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyApSuGEdY1ijRSpEvplfncH_vjYwQ6cd5A",
    authDomain: "chatapp-ad50d.firebaseapp.com",
    projectId: "chatapp-ad50d",
    storageBucket: "chatapp-ad50d.appspot.com",
    messagingSenderId: "847033457978",
    appId: "1:847033457978:web:41fdcf0973b58dee438403",
  })
  .auth();
