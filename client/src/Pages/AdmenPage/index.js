import React, {Component} from "react";
import axios from "axios"
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
            <button onClick={() => {console.log(this.state)}}>Click</button>
        </div>
    )
}
}
export default AdmenPage;