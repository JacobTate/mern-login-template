import React, { Component } from "react";
import axios from "axios";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: this.props.match.params.route,
      error: false,
      userData: {},
    };
  }
  componentDidMount() {
    axios.get(`/api/getUser/${this.state.route}`).then((res) => {
      this.setState({ error: res.data.error, userData: res.data.data });
    });
  }
  render() {
    return (
      <div>
        <button onClick={() => {console.log(this.state)}}>asdf</button>
      </div>
    );
  }
}
export default Users;
