import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <div>
            <h2>{comment.id} - {comment.name}</h2>
            <h3>Email:{comment.email}</h3>
            <p>Body:{comment.body}</p>
            <Link to={`${comment.id}`}>get Post</Link>
            <hr/>

        </div>
    );
};
export {Comment}