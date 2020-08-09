import React from "react";
function UserCard(props){
    return(
        <div class="card">
  <div class="card-body">
   <ul>
    <li>{props.user.firstName}</li>
    <li>{props.user.lastName}</li>
    <li>{props.user.email}</li>
    {props.user.isAdmen ? <button>Remove admin status</button>: <button>Make Admen</button>}
   </ul>
  </div>
</div>
    )
}
export default UserCard;