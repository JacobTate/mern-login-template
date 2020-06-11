import React, { Component } from "react";
import { Container, Button } from "reactstrap";
class SignUpForm extends Component {
  handeChange = (event) => {
    const inputName = event.target.name;
    switch (inputName) {
      case "firstName":
          
        break;
      case "lastName":
        
        break;
      case "email":
        
        break;
      case "password":
        
        break;
    }
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
