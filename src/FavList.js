import React from "react";
import FavListItem from "./FavListItem";

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
      />
    );
  });
  return <div>{list}</div>;
}

export default FavList;
