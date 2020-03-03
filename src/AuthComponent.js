import React, { useContext } from "react";
import SignIn from "./AuthFunctions/SignIn";
import SignUp from "./AuthFunctions/SignUp";
import appAuth from "./FirebaseInit";
import { AuthContext } from "./AuthProvider";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import Account from "./Account";

function AuthComponent() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div id="auth-buttons">
      {!currentUser ? (
        <div className="loggedout">
          <SignIn />
          <SignUp />
        </div>
      ) : (
        <div className="loggedin">
          <button
            className="btn btn-outline-secondary btn-sm loggedin"
            id="logout"
            onClick={() => appAuth.auth().signOut()}
          >
            Log out
          </button>

          <Link to="/account">
            <button
              className="btn btn-outline-secondary btn-sm loggedin"
              id="account"
            >
              Account
            </button>
          </Link>

          <Switch>
            <Route exact path="/account">
              <Account />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
}

export default AuthComponent;
