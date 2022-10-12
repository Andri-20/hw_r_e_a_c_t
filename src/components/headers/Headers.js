import {Link, useParams} from "react-router-dom";
import css from './HEADERS.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Load_single_user} from "../../redux";
import {SingleUserDetails} from "../singleUserDetails/SingleUserDetails";
const Headers = () => {
    let {id} = useParams();
    let {user} = useSelector(state => state.usersReducer);
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch({type:Load_single_user,payload:+id})
    },[id])
    return (
        <div className={css.nav_menu}>
                <div><Link to={'/'}>Main</Link></div>
                <div><Link to={'/users'}>Users</Link></div>
                <div><Link to={'/posts'}>Posts</Link></div>
                <div><Link to={'/comments'}>Comments</Link></div>
                <div>{user && (<div>{user.id}--{user.name}</div>)}</div>
        </div>
    );
};

export {Headers};