import React, { Component } from "react";
class Users extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={()  => {console.log(this.props.match.params.route)}}>click</button>
       
      </div>
    );
  }
}
export default Users;
