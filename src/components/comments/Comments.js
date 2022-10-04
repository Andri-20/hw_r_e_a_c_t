import {useEffect, useState} from "react";
import {getComments} from "../service";
import {Comment} from "../comment";
import {Outlet} from "react-router-dom"

const Comments = () => {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(comments => {
      setComments(comments);
        })
    }, [])
    return (
        <div>
            <Outlet/>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};
export {Comments}