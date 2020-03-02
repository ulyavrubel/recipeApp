import React from "react";
import Dropdown from "./Dropdown";
import Auth from "./Auth";

function NavBar(props) {
  return (
    <nav className="navbar fixed-top navbar-light ">
      <div>
        <div id="navHeader" className="navbar-brand" onClick={props.onClick}>
          <span className="desktop">Random recipe </span>
          <span className="mobile">Recipe </span>generator
        </div>
      </div>
      <div className="navbar-button-block">
        <p className="desktop">
          Hit a button to get one of the delicious recipes
        </p>
        <Dropdown
          categories={props.state.categories}
          handleClick={props.handleClick}
          classNameButton="btn btn-primary btn-sm dropdown-toggle"
        />
        <Auth />
      </div>
    </nav>
  );
}

export default NavBar;
