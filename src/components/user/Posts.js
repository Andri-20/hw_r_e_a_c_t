import './posts.css'
export default function (props){
    let {item:posts} = props;
    return(
        <div className="post">
            <h2>UserId: {posts.userId}</h2>
            <h3>Id: {posts.id}</h3>
            <h4>Title: {posts.title}</h4>
            <p>Body: {posts.body}</p>
        </div>
    )

}

