import React from "react";
import NavBar from "./NavBar";
import UnloadedBlock from "./UnloadedBlock";
import LoadedBlock from "./LoadedBlock";

class Recipe extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      categories: [],
      unloadedMarginTop: "25vh",
      unloadedHeaderP: "block",
      targetCategory: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleNavHeaderClick = this.handleNavHeaderClick.bind(this);
  }

  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data.categories.map(item => item.strCategory)
        });
      });
  }

  handleClick(event) {
    let name = event.target.name;
    this.setState({ targetCategory: name, loaded: true });
  }

  handleNavHeaderClick() {
    this.setState({
      loaded: false,
      unloadedMarginTop: "25vh",
      unloadedHeaderP: "block"
    });
  }

  render() {
    return !this.state.loaded ? (
      <UnloadedBlock state={this.state} handleClick={this.handleClick} />
    ) : (
      <div>
        <NavBar
          state={this.state}
          handleClick={this.handleClick}
          onClick={this.handleNavHeaderClick}
        />
        <LoadedBlock
          state={this.state}
          handleNavHeaderClick={this.handleNavHeaderClick}
        />
      </div>
    );
  }
}

export default Recipe;
