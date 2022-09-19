import {useEffect, useState} from "react";
import {getUsersAxios, getUsersPosts} from "../../services/service.axios.api";
import User from "../user/User";
import Posts from "../user/Posts"
import '../user/posts.css'
import './users.css'

export default function Users() {
    let [users, setUsers] = useState([])
    let [user, setUser] = useState([])

    let [id, setId] = useState([])
    let [posts, setPosts] = useState([])

    const userInf = (inf) => {
        setUser(inf)
        setId(inf.id)

    }
    useEffect(() => {
        getUsersAxios()
            .then(users => {
                setUsers(users.data)
            })

        getUsersPosts(user.id)
            .then(posts => {
                setPosts(posts.data)
            })
        console.log(posts);
    }, [id])
    return (
        <div>
            <div className="wrap_posts">
                <h1 className="title_posts">User posts</h1>
                <div className="posts">
                    {posts.map((post,index)=>(<Posts item={post} key={index}/>))}
                </div>
            </div>
                <div className="users">
                    {users.map((user, id) => (<User item={user} key={id} posts={userInf}/>))}
                </div>
        </div>
    )

}