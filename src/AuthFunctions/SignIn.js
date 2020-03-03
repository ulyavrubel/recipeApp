import React from "react";
import appAuth from "../FirebaseInit";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      emailSignIn: "",
      passwordSignIn: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
            </div>

            <button type="submit" className="btn btn-secondary btn-sm ">
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
