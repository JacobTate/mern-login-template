import React from "react";
import { Container, Button } from "reactstrap";
function LoginForm (props) {
    return (
      <div>
        <Container>
          <form>
            <input type="email" required name="email"></input>
            <input type="password" required name="password"></input>
            <Button color="primary">Submit</Button>
          </form>
        </Container>
       <a href="/signup">No account? Make one!</a>
      </div>
    );
}
export default LoginForm;