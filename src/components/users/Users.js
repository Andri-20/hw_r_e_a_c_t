import {useEffect, useState} from "react";

import User from "../user/User";
import {getUsers} from "../../services.api/service.fetch.api";
import Userinfo from "../user/Userinfo";


export default function Users() {
    let [users, setUsers] = useState([])
    let [user, setUser] = useState([])

    const infoUser = (inf) => {
        setUser(inf)
    }
    useEffect(() => {
        getUsers().then(value => {
            setUsers(value);
        })
    })
    return (<div className="users">
        {<Userinfo inf={user} key={user.id}/>}
        {users.map((user, id) => (<User item={user} key={id} info={infoUser}/>))}
    </div>)

}