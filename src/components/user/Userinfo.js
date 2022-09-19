
import './user.css'
export default function currentUser(props) {
    let {inf: user} = props;
     return (
        <div className="info_user">
            <h1>Current user</h1>

            <h2>Id: {user.id}</h2>
            <h2>Name: {user.name}</h2>
            <h2>Username: {user.username}</h2>
            <h3>Phone: {user.phone}</h3>
            <h3>Email: {user.email}</h3>
        </div>
    )
}