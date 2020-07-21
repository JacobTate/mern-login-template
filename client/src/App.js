import React, { Component } from "react";
import HomePage from "../src/Pages/home";
import Login from "../src/Pages/login";
import Signup from "../src/Pages/signUp";
import ProfilePage from "../src/Pages/Profile";
import Users from "../src/Pages/Users";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Nav from "../src/components/Navbar";
import AdmenPage from "../src/Pages/AdmenPage"
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <BrowserRouter>
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
              <Route exact path="/users/:route" component={Users}/>
              <Route path="/admen/allAccounts">
                <AdmenPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
