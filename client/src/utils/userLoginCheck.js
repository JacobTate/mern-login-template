import axios from "axios";
export function sessionStorageCheck() {
  const getUser = sessionStorage.getItem("LoginTemplateUser");
  const getPassword = sessionStorage.getItem("LoginTemplatePassword");
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  if(isLoggedIn){
    return { email: getUser, password: getPassword };
  }
}
export class getUserInfo {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.state = {
      email,
      password,
      userInfo: {},
    };
  }
 getUserData(){
    // return `email: ${this.state.email} password: ${this.state.password}`;
    axios
      .post(`/api/getUserInfo/`, {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.state.userInfo = res.data;
        console.log(res.data);
        
      });

    //return this.state.userInfo;
    // if (Object.keys(this.state.userInfo).length > 0) {
    //   return this.state.userInfo;
    // };
  };
 showUserData (){
    return this.state.userInfo;
 }
};
export function logOut(){
  sessionStorage.removeItem("LoginTemplateUser");
  sessionStorage.removeItem("LoginTemplatePassword");
  sessionStorage.setItem("isLoggedIn", [false])
  window.location.reload(false);
}