import React, {Component} from "react";
import axios from "axios"
import UserCard from "../../components/UserCard";
class AdmenPage extends Component{
constructor(props){
    super(props);
    this.state = {
        userArr: []
    }
}
componentDidMount(){
    axios.get("/api/getAllUsers").then(res => {
        this.setState({userArr: res.data})
    })
}
render(){
    return(
        <div>
            {this.state.userArr.map(user => <UserCard user={user} />)}
        </div>
    )
}
}
export default AdmenPage;