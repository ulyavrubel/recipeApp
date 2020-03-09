import React, { useState, useEffect } from "react";
import { getIngredients } from "./getIngredients";
import VideoComponent from "./VideoComponent";
import Footer from "./Footer";

function FavRecipe(props) {
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    setRecipe(props.recipe[0]);
    setIngredients(getIngredients(props.recipe[0]));
  }, [props]);

  return (
    <div className="desktop">
      {recipe !== null ? (
        <div>
          <div className="recipeContainer" style={{ marginTop: "0px" }}>
            <div className="instructions">
              <h1 className="display-4">{recipe.strMeal}</h1>
              <img
                className="img-fluid mobile"
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              ></img>
              <div id="listFavButtonContainer">
                <ul className="list-unstyled">{ingredients}</ul>
              </div>
              <p>{recipe.strInstructions}</p>
            </div>
            <div className="media desktop">
              <img
                className="img-fluid"
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              ></img>
            </div>
          </div>
          <div className="row justify-content-md-center video-div">
            <VideoComponent loaded={Boolean(recipe)} url={recipe.strYoutube} />
          </div>
          <Footer href={recipe.strSource} />
        </div>
      ) : null}
    </div>
  );
}

export default FavRecipe;
