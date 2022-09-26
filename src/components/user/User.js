import css from './User.module.css'
const User = ({user}) => {
    return (
        <div className={css.user}>
            <h3>{user.id} - {user.name}</h3>
            <h4>{user.username}</h4>
            <p>{user.phone}</p>
        </div>
    );
};
export {User}