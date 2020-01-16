import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Recipe from "./Recipe";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Recipe />;
  }
}

export default App;
