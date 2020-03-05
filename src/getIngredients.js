import React from "react";

export const getIngredients = recipe => {
  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(
        recipe[`strIngredient${i}`] + " - " + recipe[`strMeasure${i}`]
      );
    }
  }
  return ingredients.map(
    ingredient => (ingredient = <li key={ingredient}>{ingredient}</li>)
  );
};
