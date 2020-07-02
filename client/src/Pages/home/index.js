import React, { Component } from "react";
import Nav from "../../components/Navbar";
import {sessionStorageCheck} from "../../utils/userLoginCheck";
class HomePage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isUserLoggedIn: false,
  //   };
  // }
  // componentDidMount() {
  //   if(sessionStorageCheck().email && sessionStorageCheck().password){
  //     this.setState({isUserLoggedIn: true});
  //   };
  // }
   render() {
    // return <Nav page={"home"} isLoggedIn={this.state.isUserLoggedIn}/>
    return <div className="jumbotron"></div>
   }
}
export default HomePage;
