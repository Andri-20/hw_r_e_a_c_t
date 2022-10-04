import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPost} from "../service";
import {Post} from "../../post/Post";

const Posts = () => {
    let {id} = useParams();
    let [post, setPost] = useState([]);
    useEffect(() => {
        getPost(id).then(post => setPost({...post}))
    },[id])
    return (
        <div>
            {<Post post={post}/>}
        </div>
    );
};
export {Posts}