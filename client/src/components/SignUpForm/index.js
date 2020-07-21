import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import {logIn} from "../../utils/userLoginCheck"
import axios from "axios";
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }
  handeChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    switch (inputName) {
      case "firstName":
        this.setState({ firstName: inputValue });
        break;
      case "lastName":
        this.setState({ lastName: inputValue });
        break;
      case "email":
        this.setState({ email: inputValue });
        break;
      case "password":
        this.setState({ password: inputValue });
        break;
        default:
          alert("An unaccepted error occurred");
          break;
    };
  };
  handeSubmit = () => {
    axios
      .post("/api/signup", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      })
      .then((err) => {
        if (err.data.error) {
          alert(`A user with this email already exists.`);
        } else {
          logIn(this.state.email, this.state.password)
        };
      });
  };
  render() {
    return (
      <div>
        <Container>
          <form
            onSubmit={(event) => {
              this.handeSubmit();
              event.preventDefault();
            }}
          >
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
            <Button type="submit" color="primary">
              Submit
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}
export default SignUpForm;
