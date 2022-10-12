import {Link} from "react-router-dom";

const User = ({user}) => {
    return (
        <div>
            <h1>{user.id}--{user.name}</h1>
            <h2>{user.username}</h2>
            <h3>{user.email}</h3>
            <span><Link to={user.id.toString()}>Single user</Link></span>
        </div>
    );
};
export {User};