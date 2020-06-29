import React, { Component } from "react";
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
    if (userCreds.isLoggedIn == "false") {
      alert("Must be sigined in to view profile page");
      window.location.replace("/");
    }
    setTimeout(() => {
      const userData = userInfo.showUserData();
      this.setState({
        userFName: userData.firstName,
        userLName: userData.lastName,
        userEmail: userData.email,
      });
    }, 500);
  }

  render() {
    return (
      <div>
        <a href="/">Home</a>
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
