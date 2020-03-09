import React from "react";
import FavListItem from "./FavListItem";
import { getIngredients } from "./getIngredients";

function FavList(props) {
  const list = props.recipes.map(recipe => {
    return (
      <FavListItem
        key={recipe.idMeal}
        img={recipe.strMealThumb}
        id={recipe.idMeal}
        db={recipe.id}
        name={recipe.strMeal}
        instructions={recipe.strInstructions}
        category={recipe.strCategory}
        onClick={props.onClick}
        onDelete={props.onDelete}
        ingredients={getIngredients(recipe)}
        strYoutube={recipe.strYoutube}
      />
    );
  });
  return <div>{list}</div>;
}

export default FavList;
