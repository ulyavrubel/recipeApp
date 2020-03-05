import React from "react";
import FavListItem from "./FavListItem";

function FavList(props) {
  const list = props.recipes.map(recipe => {
    return (
      <FavListItem
        img={recipe.strMealThumb}
        id={recipe.idMeal}
        key={recipe.idMeal}
        name={recipe.strMeal}
        instructions={recipe.strInstructions}
        category={recipe.strCategory}
        onClick={props.onClick}
      />
    );
  });
  return <div>{list}</div>;
}

export default FavList;
