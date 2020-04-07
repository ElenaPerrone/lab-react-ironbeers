import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Beers from "./components/Beers";
import BeerDetails from "./pages/BeerDetails";
import AddBeer from "./pages/AddBeer";
import newBeerDetails from "./components/newBeerDetails";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/auth/signup" component={SignUp} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/user/profile" component={Profile} />
          <Route exact path="/auth/logout" component={Login} />
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
