import {useEffect, useState} from "react";
import {getUsersAxios} from "../../service.api.axios/service.axios.api";
import User from "../user/User";
export default function Users(){
    let [users,setUsers] = useState([])

    useEffect(()=>{
        getUsersAxios()
            .then(user => {
            setUsers(user.data)
        })
    },[])
    return(
        <div>
            {users.map((user,id)=>(<User item={user} key={id}/>))}
        </div>
    )

}