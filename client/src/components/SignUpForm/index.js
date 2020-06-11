import React, { Component } from "react";
import { Container, Button } from "reactstrap";
class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };
    };
  handeChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    switch (inputName) {
      case "firstName":
          this.setState({firstName: inputValue});
        break;
      case "lastName":
        this.setState({lastName: inputValue});
        break;
      case "email":
        this.setState({email: inputValue});
        break;
      case "password":
        this.setState({password: inputValue});
        break;
    };
  };
  render() {
    return (
      <div>
        <Container>
          <form>
            <input
              onChange={(event) => {
                this.handeChange(event);
              }}
              type="text"
              required
              name="firstName"
            ></input>
            <input
              onChange={(event) => {
                this.handeChange(event);
              }}
              type="text"
              required
              name="lastName"
            ></input>
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
      </div>
    );
  }
}
export default SignUpForm;
