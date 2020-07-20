import React, { Component } from "react";
import axios from "axios";
import ErrorPage from "../../components/Error"
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
  showUserData  = (userData) => {
   const userDataArr = [userData.firstName, userData.lastName, userData.email]
    return(
    <div>
     <ul>
    {userDataArr.map(data => (<li>{data}</li>))}
     </ul>
    </div>
    )
  }
  render() {
    return (
      <div>
        {this.state.error ? <ErrorPage />: this.showUserData(this.state.userData)}
      </div>
    );
  }
}
export default Users;
