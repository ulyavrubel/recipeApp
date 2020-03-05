import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import "./index.css";
import { appAuth, appDB } from "./FirebaseInit";
import Recipe1 from "./Recipe1";
import FavList from "./FavList";
import FavRecipe from "./FavRecipe";

function Account() {
  const { currentUser } = useContext(AuthContext);
  const [favRecipes, setFavRecipes] = useState([]);
  const [showRecipe, setShowRecipe] = useState(null);

  useEffect(() => {
    if (currentUser) {
      appDB
        .collection("users")
        .doc(currentUser.uid)
        .collection("favorites")
        .onSnapshot(
          snapshot => {
            setFavorites(snapshot);
          },
          err => {
            console.log(err);
          }
        );
    } else {
      setFavorites([]);
    }
  }, [currentUser]);

  function setFavorites(data) {
    if (data.length !== 0) {
      data.forEach(doc => {
        const recipe = doc.data();
        setFavRecipes(prev => {
          return [...prev, recipe];
        });
        console.log(favRecipes);
      });
    }
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(event.target.id);
    setShowRecipe(favRecipes.filter(item => item.idMeal === event.target.id));
  }

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
          <p>{currentUser ? currentUser.email : null}</p>
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
        <div id="fav-list">
          <FavList recipes={favRecipes} onClick={handleClick} />
        </div>
        {showRecipe !== null ? (
          <div id="fav-recipe">
            <FavRecipe recipe={showRecipe} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Account;
