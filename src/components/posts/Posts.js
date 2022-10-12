import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../../services";
import {Load_posts} from "../../redux";
import {Post} from "../post/Post";

const Posts = () => {
    let {posts} = useSelector(state => state.postsReducer);

    let dispatch = useDispatch();
    useEffect(() => {
        getPosts().then(value => dispatch({type: Load_posts, payload: value}))
    }, [])
    return (
        <div>
            {posts.map(post => (<Post key={post.id} post={post}/>))}
        </div>
    );
};

export {Posts};