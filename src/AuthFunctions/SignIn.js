import React from "react";

function SignIn() {
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
        <form>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail2"
              placeholder="email@example.com"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormPassword2">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword2"
              placeholder="Password"
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

export default SignIn;
