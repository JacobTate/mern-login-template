import React, { Component } from "react";
import HomePage from "../src/Pages/home";
import Login from "../src/Pages/login";
import Signup from "../src/Pages/signUp";
import ProfilePage from "../src/Pages/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "../src/components/Navbar";
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Router>
          <div>
            <Switch>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
