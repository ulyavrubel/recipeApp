import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCfi4BhRLOG4NXEHbDggmdMxtq2FaBX86g",
  authDomain: "recipe-app-2502.firebaseapp.com",
  databaseURL: "https://recipe-app-2502.firebaseio.com",
  projectId: "recipe-app-2502",
  storageBucket: "recipe-app-2502.appspot.com",
  messagingSenderId: "742840870839",
  appId: "1:742840870839:web:70bbf68da69a435d7fea32"
};
// Initialize Firebase
export const appAuth = firebase.initializeApp(firebaseConfig);
export const appDB = firebase.firestore();
