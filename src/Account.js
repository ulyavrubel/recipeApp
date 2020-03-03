import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import "./index.css";

function Account() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div id="account-content">
      <h5 style={{ textAlign: "center", marginTop: "30vh" }}>
        You are logged in <br />
        as <span style={{ color: "grey" }}>{currentUser.email}</span>
      </h5>
    </div>
  );
}

export default Account;
