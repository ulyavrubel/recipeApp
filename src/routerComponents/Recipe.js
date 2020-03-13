import React from "react";
import VideoComponent from "./VideoComponent";

class Recipe extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      recipe: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loaded: true,
          recipe: data.meals[0]
        });
      });
  }

  render() {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (this.state.recipe[`strIngredient${i}`]) {
        ingredients.push(
          this.state.recipe[`strIngredient${i}`] +
            " - " +
            this.state.recipe[`strMeasure${i}`]
        );
      }
    }

    let ingredientsList = ingredients.map(
      ingredient => (ingredient = <li key={ingredient}>{ingredient}</li>)
    );

    let unloadedBlock = (
      <div className="unloaded">
        <h1 className="display-3">Random recipe generator</h1>
        <p>Hit a button to get one of the delicious recipes</p>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={this.handleClick}
        >
          Get a recipe
        </button>
      </div>
    );

    let loadedBlock = (
      <div>
        <nav className="navbar fixed-top navbar-light bg-light">
          <div>
            <a className="navbar-brand">Random recipe generator</a>
          </div>
          <div className="navbar-button-block">
            <p className="desktop">
              Hit a button to get one of the delicious recipes
            </p>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={this.handleClick}
            >
              Get a recipe
            </button>
          </div>
        </nav>
        <div className="recipeContainer">
          <div className="instructions">
            <h1 className="display-4">{this.state.recipe.strMeal}</h1>
            <img
              className="img-fluid mobile"
              src={this.state.recipe.strMealThumb}
              alt={this.state.recipe.strMeal}
            ></img>
            <ul className="list-unstyled">{ingredientsList}</ul>
            <p>{this.state.recipe.strInstructions}</p>
          </div>

          <div className="media desktop">
            <img
              className="img-fluid"
              src={this.state.recipe.strMealThumb}
              alt={this.state.recipe.strMeal}
            ></img>
          </div>
        </div>
        <div className="row justify-content-md-center video-div">
          <VideoComponent
            loaded={this.state.loaded}
            url={this.state.recipe.strYoutube}
          />
        </div>
        <footer>
          <p>
            <a
              href={this.state.recipe.strSource}
              className="text-primary"
              target="_blank"
            >
              Recipe source
            </a>
          </p>
          <p>
            <a
              href="https://www.themealdb.com/api.php"
              className="text-secondary"
              target="_blank"
            >
              API source
            </a>
          </p>
        </footer>
      </div>
    );

    return !this.state.loaded ? unloadedBlock : loadedBlock;
  }
}

export default Recipe;
