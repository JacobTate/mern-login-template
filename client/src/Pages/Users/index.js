import React, { Component } from "react";
import axios from "axios";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: this.props.match.params.route,
    };
  }
  componentDidMount(){
    axios.get(`/api/getUser/${this.state.route}`).then(res => {
      console.log(res);
    })
  }
  render() {
    return <div></div>;
  }
}
export default Users;
