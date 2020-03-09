import React from "react";
import * as firebase from "firebase/app";
import { appAuth } from "../FirebaseInit";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      emailSignIn: "",
      passwordSignIn: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordReset = this.handlePasswordReset.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    appAuth
      .auth()
      .signInWithEmailAndPassword(
        this.state.emailSignIn,
        this.state.passwordSignIn
      )
      .then(cred => {
        console.log(cred);
      })
      .catch(err => console.log(err.message));
  }

  handlePasswordReset(event) {
    console.log(event);
    console.log(this.state.emailSignIn);
    if (this.state.emailSignIn !== "") {
      appAuth
        .auth()
        .sendPasswordResetEmail(this.state.emailSignIn)
        .then(alert(`Email has been sent to ${this.state.emailSignIn}`))
        .catch(err => console.log(err.message));
    } else {
      alert("Fill in the email field");
    }
  }

  googleSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    appAuth
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // // The signed-in user info.
        // var user = result.user;
        console.log(token);
      })
      .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        console.log(errorMessage);
      });
  }

  render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-outline-dark btn-sm loggedout dropdown-toggle"
          type="button"
          id="dropdownMenuButtonLogin"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sign in
        </button>
        <div
          className="dropdown-menu dropdown-menu-right"
          style={{ padding: "17px" }}
          aria-labelledby="dropdownMenuButtonLogin"
        >
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="emailSignIn">Email address</label>
              <input
                type="email"
                className="form-control"
                id="emailSignIn"
                placeholder="email@example.com"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="passwordSignIn">Password</label>
              <input
                type="password"
                className="form-control"
                id="passwordSignIn"
                placeholder="Password"
                onChange={this.handleChange}
              ></input>
              <div className="text-right">
                <button
                  style={{ marginTop: "3px" }}
                  id="resetPassword"
                  className="btn btn-light btn-sm"
                  onClick={this.handlePasswordReset}
                >
                  <small className="text-muted text-right">
                    Forget password?
                  </small>
                </button>
              </div>
            </div>
            <div id="signinButtons">
              <button type="submit" className="btn btn-secondary btn-sm ">
                Sign in
              </button>
              <div
                className="g-signin2"
                data-onsuccess="onSignIn"
                onClick={this.googleSignIn}
              ></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
