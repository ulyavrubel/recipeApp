import React from "react";
import Dropdown from "./Dropdown";
import AuthComponent from "./AuthComponent";
import Logo from "./logo.png";

function NavBar(props) {
  return (
    <nav className="navbar fixed-top navbar-light">
      <div>
        <div id="navHeader" className="navbar-brand" onClick={props.onClick}>
          <img
            src={Logo}
            height="30"
            width="30"
            className="d-inline-block align-top"
            alt=""
          ></img>
          <span className="desktop">Random recipe generator</span>
        </div>
      </div>
      <div className="navbar-button-block">
        {props.state.loaded ? (
          <div className="navbar-button-block">
            <p id="hitabutton" className="desktop">
              Hit a button to get one of the delicious recipes
            </p>
            <Dropdown
              handleClick={props.handleClick}
              classNameButton="btn btn-primary btn-sm dropdown-toggle"
              direction="dropdown"
            />
          </div>
        ) : null}

        <AuthComponent onAccountClick={props.onAccountClick} />
      </div>
    </nav>
  );
}

export default NavBar;
