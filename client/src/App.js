import React, { Component } from "react";
import HomePage from "../src/Pages/home";
import Login from "../src/Pages/login";
import Signup from "../src/Pages/signUp";
import ProfilePage from "../src/Pages/Profile";
import Users from "../src/Pages/Users";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Nav from "../src/components/Navbar";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: [],
    };
  }
  // componentDidMount() {
  //   axios.get("/api/getUsers")
  //   .then((res) => {
  //     this.setState({users: res.data})
  //   });
  // }
  render() {
    return (
      <div>
        <Nav />
        {/* <Router> */}
        <BrowserRouter>
          {/* {this.state.users.map(user => (<link to={'/users/' + user.route} />))} */}
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
                
             
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
          </BrowserRouter>
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
