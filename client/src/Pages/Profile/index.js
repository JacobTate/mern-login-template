import React, { Component } from "react";
import axios from "axios";
import { sessionStorageCheck, getUserInfo } from "../../utils/userLoginCheck";
const userCreds = sessionStorageCheck();
const userInfo = new getUserInfo(userCreds.email, userCreds.password);
userInfo.getUserData();
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFName: "",
      userLName: "",
      userEmail: "",
    };
  }
  componentDidMount() {
    
    setTimeout(() =>{
      console.log(userInfo.showUserData());
      const userData = userInfo.showUserData();
      this.setState({
        userFName: userData.firstName,
        userLName: userData.lastName,
        userEmail: userData.email
      });
   }, 500);
  }

  render() {
    return (
      <div>
        <ul>
    <li>{this.state.userFName}</li>
    <li>{this.state.userLName}</li>
    <li>{this.state.userEmail}</li>
        </ul>
      </div>
    );
  }
}
export default ProfilePage;
