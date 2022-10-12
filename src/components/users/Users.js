import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../services";
import {User} from "../user/User";
import {Load_users} from "../../redux";

const Users = () => {

    let {users} = useSelector(state => state.usersReducer);
    let dispatch = useDispatch();

    useEffect(() => {
        getUsers().then(users =>dispatch({type:Load_users,payload:users}))
        console.log(users);
    }, [])
    return (
        <div>
            {users.map(user=>(<User user={user} key={user.id}/>))}
        </div>
    );
};

export {Users};