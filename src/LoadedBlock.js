import React from "react";
import VideoComponent from "./VideoComponent";
import Footer from "./Footer";
import FavButton from "./FavButton";
import { getIngredients } from "./getIngredients";

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
    let ingredientsList = getIngredients(this.state.recipe);
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
            <div id="listFavButtonContainer">
              <ul className="list-unstyled">{ingredientsList}</ul>
              <div>
                <FavButton className="mobile" recipe={this.state.recipe} />
              </div>
            </div>
            <p>{this.state.recipe.strInstructions}</p>
          </div>

          <div className="media desktop">
            <img
              className="img-fluid"
              src={this.state.recipe.strMealThumb}
              alt={this.state.recipe.strMeal}
            ></img>
            {/* <FavButton className="desktop" recipe={this.state.recipe} /> */}
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
