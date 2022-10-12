import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getComments} from "../../services";
import {Load_comments} from "../../redux";
import {Comment} from "../comment/Comment";

const Comments = () => {
    let {comments} = useSelector(state => state.commentsReducer);

    let dispatch = useDispatch();
    useEffect(()=>{
        getComments().then(value => dispatch({type:Load_comments,payload:value}))
    },[])

    return (
        <div>
            <h2>Comments</h2>
            {comments.map(comment=>(<Comment key={comment.id} comment={comment}/>))}
        </div>
    );
};
export {Comments}