import React, { Component } from "react";
import LoginForm from "../../components/loginForm";
class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <LoginForm />
      </div>
    );
  }
}
export default Login;
