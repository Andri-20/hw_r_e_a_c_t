const Todo = ({todo}) => {
    return (
        <div>
            <h3>UserId:{todo.userId}</h3>
            <h4>{todo.id} - {todo.title}</h4>
            <h5>{todo.title}</h5>
            <hr/>
        </div>
    );
};
export {Todo}
