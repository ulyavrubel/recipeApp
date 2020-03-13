import React from "react";
import "./App.css";
import { AuthProvider } from "./AuthProvider";
import Recipe1 from "./Recipe1";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <AuthProvider>
        <Recipe1 />
      </AuthProvider>
    );
  }
}

export default App;
