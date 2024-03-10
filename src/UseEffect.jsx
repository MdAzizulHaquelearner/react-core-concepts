import { useEffect, useState } from "react"
import Users from "./DisplayUsers";

export default function Effect() {
    const [users,setUsers] = useState([]);
  

    useEffect(function(){
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => setUsers(data))
    }
    ,[])

return <>
  <h2>Users :{users.length} </h2>
  {users.map(user => <Users user={user}></Users>)}
</>
}