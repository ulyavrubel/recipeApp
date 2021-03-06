import React, { useContext } from "react";
import SignIn from "./AuthFunctions/SignIn";
import SignUp from "./AuthFunctions/SignUp";
import { appAuth } from "./FirebaseInit";
import { AuthContext } from "./AuthProvider";

function AuthComponent(props) {
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

          <button
            className="btn btn-outline-secondary btn-sm loggedin"
            id="account"
            onClick={props.onAccountClick}
          >
            Account
          </button>
        </div>
      )}
    </div>
  );
}

export default AuthComponent;
