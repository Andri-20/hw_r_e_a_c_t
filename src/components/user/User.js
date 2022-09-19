import '../users/users.css'
export default function User(props) {
    let {item: user,posts} = props;
    return (
        <div className="user">
            <h2>{user.id} - {user.name} - {user.username}</h2>
            <button onClick={()=>{
                posts(user)
            }}>Posts</button>
        </div>
    )

}