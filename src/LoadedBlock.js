import React from "react";
import Dropdown from "./Dropdown";
import VideoComponent from "./VideoComponent";
import Footer from "./Footer";

class LoadedBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: null,
      recipe: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  fetchRecipe(category) {
    var randomItemId = "";
    if (category === "random") {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(data => {
          this.setState({
            loaded: true,
            recipe: data.meals[0]
          });
        });
    } else {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(response => response.json())
        .then(data => {
          randomItemId =
            data.meals[Math.floor(Math.random() * data.meals.length)].idMeal;
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomItemId}`
          );
        })
        .then(response => response.json())
        .then(data => {
          this.setState({
            loaded: true,
            recipe: data.meals[0]
          });
        });
    }
  }

  getIngredients() {
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
    return ingredients.map(
      ingredient => (ingredient = <li key={ingredient}>{ingredient}</li>)
    );
  }

  componentDidMount() {
    this.fetchRecipe(this.props.state.targetCategory);
  }

  componentDidUpdate(prevProps) {
    if (this.props.state.targetCategory !== prevProps.state.targetCategory) {
      this.fetchRecipe(this.props.state.targetCategory);
    }
  }

  handleClick(event) {
    this.fetchRecipe(event.target.name);
  }

  render() {
    let ingredientsList = this.getIngredients();
    return (
      <div>
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
        <Footer href={this.state.recipe.strSource} />
      </div>
    );
  }
}

export default LoadedBlock;
