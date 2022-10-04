const Album = ({album}) => {
    return (
        <div>
            <h2>UserId:{album.userId}</h2>
            <h3>Id:{album.id}</h3>
            <p>Title:{album.title}</p>
            <hr/>
        </div>
    );
};
export {Album}