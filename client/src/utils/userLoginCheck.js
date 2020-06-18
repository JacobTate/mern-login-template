import axios from "axios";
import React, { Component } from "react";
export function sessionStorageCheck() {
  const getUser = sessionStorage.getItem("LoginTemplateUser");
  const getPassword = sessionStorage.getItem("LoginTemplatePassword");
  return { email: getUser, password: getPassword };
}

//  export class getUserInfo extends Component{
// // axios.post(`/api/getUserInfo/`, {
// //     email: email,
// //     password: password
// // }).then(res => {
// // return userInfo = res.data;
// // });
// // console.log(userInfo);
// showInfo = (email, password) => {
//     console.log(email + password);

// };
// render(){
//     return(
//         <div>
//             {this.showInfo(this.props.email, this.props.password)}
//             <button>asdffasd</button>
//         </div>
//     );
// }
//  }
export class getUserInfo {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.state = {
        email,
        password,
        userInfo: {}
    }
  };
  getUserData(){
     // return `email: ${this.state.email} password: ${this.state.password}`;
      axios.post(`/api/getUserInfo/`, {
    email: this.state.email,
    password: this.state.password
}).then(res => {
this.state.userInfo = res.data
});

return this.state.userInfo;

  }
}
