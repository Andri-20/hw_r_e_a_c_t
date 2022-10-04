const Todo = ({todo}) => {
    return (
        <div>
            <h4>{todo.userId}</h4>
            <h4>{todo.id}</h4>
            <h4>{todo.title}</h4>
            <h4>{todo.completed}</h4>
        </div>
    );
};
export {Todo}
