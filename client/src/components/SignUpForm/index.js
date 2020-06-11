import React from "react";
import { Container, Button } from "reactstrap";
function SignUpForm(props) {
  return (
    <div>
      <Container>
        <form>
          <input type="text" required name="firstName"></input>
          <input type="text" required name="lastName"></input>
          <input type="email" required name="email"></input>
          <input type="password" required name="password"></input>
          <Button color="primary">Submit</Button>
        </form>
      </Container>
    </div>
  );
}
export default SignUpForm;
