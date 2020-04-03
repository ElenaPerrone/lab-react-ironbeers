import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Beers from "./pages/Beers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Route path="/beers" component={Navbar} />
        <Route path="/beers" component={Beers} />
      </div>
    );
  }
}

export default App;
