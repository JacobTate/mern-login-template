import React, { Component } from "react";
import {logIn} from "../../utils/userLoginCheck"
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
      default:
        alert("An unaccepted error occurred");
        break;
    }
  };
  render() {
    return (
      <div className="container">
        <form
          onSubmit={(event) => {
            logIn(this.state.email, this.state.password)
            event.preventDefault();
          }}
        >
              <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Email
            </span>
          </div>
          <input
              onChange={(event) => {
                this.handeChange(event);
              }}
            type="email"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            name="email"
            required
          ></input>
        </div>

        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Password
            </span>
          </div>
          <input
              onChange={(event) => {
                this.handeChange(event);
              }}
            type="password"
            class="form-control"
            name="password"
            required
          ></input>
        <button className="btn btn-primary" type="submit">Submit</button>
        </div>
        </form>
    
        {/* <Container>
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
        </Container> */}
        <a href="/signup">No account? Make one!</a>
      </div>
    );
  }
}
export default LoginForm;
   