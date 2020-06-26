import React, { Component } from "react";
import { sessionStorageCheck, getUserInfo } from "../../utils/userLoginCheck";
const userCreds = sessionStorageCheck();
//if(userCreds.email !== null && userCreds.password !== null){
  var userInfo = new getUserInfo(userCreds.email, userCreds.password);
  userInfo.getUserData();
//}else{
 // backToHome();
//}
function backToHome(){
 //window.location.replace("/");
}
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
