import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Beers from "./components/Beers";
import BeerDetails from "./pages/BeerDetails";
import AddBeer from "./pages/AddBeer";
import newBeerDetails from "./components/newBeerDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Route path="/beers" component={Navbar} />
        <Switch>
          <Route path="/beers/details/:id" component={BeerDetails} />
          <Route path="/beers" component={Beers} />
          <Route path="/new-beer" component={AddBeer} />
          <Route path="/beer-detail/:beerId" component={newBeerDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
