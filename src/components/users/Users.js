import {useEffect, useState} from "react";
import {userService} from "../services";
import UserForm from "../userForm/UserForm";
import {User} from "../user/User";
import css from "../user/User.module.css"

const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    }, [])
    return (
        <div>
            <h2>Users</h2>
            <hr/>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <div className={css.users}>
                {users.map((user, index) => <User user={user} key={index}/>)}
            </div>
        </div>
    );
};

export default Users;