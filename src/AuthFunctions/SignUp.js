import React from "react";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// const auth = firebase.auth();

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event);
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   auth
  //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
  //     .then(cred => {
  //       console.log(cred);
  //     })
  //     .catch(err => console.log(err.message));
  // }

  render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary btn-sm loggedout dropdown-toggle"
          type="button"
          id="dropdownMenuButtonSignUp"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sign up
        </button>
        <div
          className="dropdown-menu dropdown-menu-right"
          style={{ padding: "17px" }}
          aria-labelledby="dropdownMenuButtonSignUp"
        >
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email@example.com"
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={this.handleChange}
              ></input>
            </div>

            <button
              type="submit"
              className="btn btn-secondary btn-sm "
              onSubmit={this.handleSubmit}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
