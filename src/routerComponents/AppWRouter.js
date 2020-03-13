import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import Recipe1 from "./Recipe1";
import Account from "./Account";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <AuthProvider>
          <Router>
            <Route exact path="/" component={Recipe1}></Route>
            <Route exact path="/account" component={Account}></Route>
          </Router>
        </AuthProvider>
      </HashRouter>
    );
  }
}

export default App;
