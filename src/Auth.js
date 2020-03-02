import React from "react";
import SignIn from "./AuthFunctions/SignIn";
import SignUp from "./AuthFunctions/SignUp";
import * as firebase from "firebase/app";

// var firebaseConfig = {
//   apiKey: "AIzaSyCfi4BhRLOG4NXEHbDggmdMxtq2FaBX86g",
//   authDomain: "recipe-app-2502.firebaseapp.com",
//   databaseURL: "https://recipe-app-2502.firebaseio.com",
//   projectId: "recipe-app-2502",
//   storageBucket: "recipe-app-2502.appspot.com",
//   messagingSenderId: "742840870839",
//   appId: "1:742840870839:web:70bbf68da69a435d7fea32"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

function Auth() {
  return (
    <div id="auth-buttons">
      <SignIn />
      <SignUp />

      <button
        className="btn btn-outline-primary btn-sm loggedin"
        id="logout"
        style={{ display: "none" }}
      >
        Log out
      </button>
      <button
        className="btn btn-outline-primary btn-sm loggedin"
        id="account"
        style={{ display: "none" }}
      >
        Account
      </button>
    </div>
  );
}

export default Auth;
