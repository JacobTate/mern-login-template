import React, { Component } from "react";
import Nav from "../../components/Navbar";
import {sessionStorageCheck} from "../../utils/userLoginCheck";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false,
    };
  }
  componentDidMount() {
    if(sessionStorageCheck().email && sessionStorageCheck().password){
      this.setState({isUserLoggedIn: true});
    };
  }
  render() {
    return this.state.isUserLoggedIn ? <Nav isLoggedIn={true}/> : <Nav isLoggedIn={false}/>;
  }
}
export default HomePage;
