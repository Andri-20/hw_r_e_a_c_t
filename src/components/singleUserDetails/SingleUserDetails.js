const SingleUserDetails = ({user}) => {
    console.log(user);
    return (
        <div>
            <h2>Id: "{user.id}" -- Name: "{user.name}"</h2>
            <h3>Username:{user.username}</h3>
            <h3>Email:{user.email}</h3>
            <h4>Phone:{user.phone}</h4>
        </div>
    );
};

export {SingleUserDetails};