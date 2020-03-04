import React, { useContext } from "react";
import { appDB } from "./FirebaseInit";
import { AuthContext } from "./AuthProvider";

function FavButton(props) {
  const { currentUser } = useContext(AuthContext);

  function handleClick(event) {
    event.preventDefault();
    if (currentUser) {
      console.log(props.recipe);

      appDB
        .collection("users")
        .doc(currentUser.uid)
        .collection("favorites")
        .add(props.recipe)
        .then(cred => {
          console.log("Added to favorites", cred);
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  }

  return (
    <button
      type="button"
      className="btn btn-outline-secondary btn-sm"
      id="favButton"
      onClick={handleClick}
    >
      Add to favorites
    </button>
  );
}

export default FavButton;
