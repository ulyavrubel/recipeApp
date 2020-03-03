import React from "react";
import "./App.css";
import Recipe1 from "./Recipe1";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import Account from "./Account";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <AuthProvider>
        <Router>
          <Route exact path="/" component={Recipe1}></Route>
          <Route exact path="/account" component={Account}></Route>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
