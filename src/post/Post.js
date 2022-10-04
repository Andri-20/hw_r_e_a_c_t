const Post = ({post}) => {
    return (
        <div>
            <hr/>
            <h3>{post.id} -- {post.title}</h3>
            <p>{post.body}</p>
            <hr/>
        </div>
    );
};
export {Post}