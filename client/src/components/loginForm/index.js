import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import axios from 'axios';
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handeChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    switch (inputName) {
      case "email":
        this.setState({ email: inputValue });
        break;
      case "password":
        this.setState({ password: inputValue });
        break;
    }
  };
  handeSubmit = () => {
    axios.post(`/api/login`, {
      email: this.state.email,
      password: this.state.password
    });
    console.log(this.state.email);
    
  };
  render() {
    return (
      <div>
        <Container>
          <form
            onSubmit={(event) => {
              this.handeSubmit(event);
              event.preventDefault();
            }}
          >
            <input
              onChange={(event) => {
                this.handeChange(event);
              }}
              type="email"
              required
              name="email"
            ></input>
            <input
              onChange={(event) => {
                this.handeChange(event);
              }}
              type="password"
              required
              name="password"
            ></input>
            <Button color="primary">Submit</Button>
          </form>
        </Container>
        <a href="/signup">No account? Make one!</a>
      </div>
    );
  }
}
export default LoginForm;
