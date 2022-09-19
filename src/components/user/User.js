import {getUser} from "../../services.api/service.fetch.api";
import './user.css'
export default function User(props) {
    let {item: user,info} = props;
    return (
        <div className="user">
            <h2>{user.id} - {user.name}</h2>
            <button className="user_btn" onClick={()=>{
                info(user)
            }}>details</button>
        </div>

    )
}