import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Load_single_user} from "../../redux";
import {SingleUserDetails} from "../singleUserDetails/SingleUserDetails";
import {useEffect} from "react";

const SingleUserComponent = () => {
    let {id} = useParams();

    let {user} = useSelector(state => state.usersReducer);
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch({type:Load_single_user,payload:+id});
    },[id])
    return (
        <div>
            {user && (<SingleUserDetails  user={user}/>)}
        </div>
    );
};

export {SingleUserComponent};