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
    return (
      <div>
        <NavBar
          state={this.state}
          handleClick={this.handleClick}
          onClick={this.handleNavHeaderClick}
        />
        {!this.state.loaded ? (
          <UnloadedBlock state={this.state} handleClick={this.handleClick} />
        ) : (
          <LoadedBlock
            state={this.state}
            handleNavHeaderClick={this.handleNavHeaderClick}
          />
        )}
      </div>
    );
  }
}

export default Recipe;
