import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import "./index.css";
import { appAuth, appDB } from "./FirebaseInit";
import Recipe1 from "./Recipe1";

function Account() {
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [favRecipes, setFavRecipes] = useState({});

  useEffect(() => {
    if (currentUser) {
      appDB
        .collection("users")
        .doc(currentUser.uid)
        .collection("favorites")
        .onSnapshot(
          snapshot => {
            setData(snapshot);
            console.log(snapshot);
          },
          err => {
            console.log(err);
          }
        );
    }
  }, currentUser);

  // useEffect(() => {
  //   if (data !== null) {
  //     data.forEach(doc => {
  //       const recipe = doc.data();
  //       setFavRecipes(prev => {
  //         return { ...prev, recipe };
  //       });
  //       console.log(favRecipes);
  //     });
  //   }
  // }, []);

  return (
    <div>
      <nav className="navbar fixed-top navbar-light ">
        <div>
          <Link to="/">
            <div id="navHeader" className="navbar-brand">
              <span className="desktop">Random recipe </span>
              <span className="mobile">Recipe </span>generator
            </div>
          </Link>
        </div>
        <div className="navbar-button-block">
          <Link to="/">
            <div className="loggedin">
              <button
                className="btn btn-outline-secondary btn-sm loggedin"
                id="logout"
                onClick={() => appAuth.auth().signOut()}
              >
                Log out
              </button>
            </div>
          </Link>
          <Switch>
            <Route exact path="/">
              <Recipe1 />
            </Route>
          </Switch>
        </div>
      </nav>
      <div id="account-content">
        <h5 style={{ textAlign: "center", marginTop: "30vh" }}>
          You are logged in <br />
          as <span style={{ color: "grey" }}>{currentUser.email}</span>
        </h5>
      </div>
      <div>
        <p>{JSON.stringify(favRecipes)}</p>
      </div>
    </div>
  );
}

export default Account;
