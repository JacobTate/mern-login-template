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
        
    })
}
}
export default AdmenPage;