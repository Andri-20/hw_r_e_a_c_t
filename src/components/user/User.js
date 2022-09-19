export default function User(props) {
    let {item: user} = props;
    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            <h2>{user.username}</h2>
            <button>Posts</button>
        </div>
    )

}