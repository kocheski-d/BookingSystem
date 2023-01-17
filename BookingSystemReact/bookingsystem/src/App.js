import React from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router";
import HomePage from "./components/pages/HomePage";
import history from "./components/history";
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="AppContainer">
        <Router history={history}>
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }

}


export default connect()(App);