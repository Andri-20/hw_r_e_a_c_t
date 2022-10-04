import {useEffect, useState} from "react";
import {getTodos} from "../service";
import {Todo} from "../todo";

const Todos = () => {

    let [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos().then(todos => {
            setTodos(todos);
        })
    }, [])
    return (
        <div>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};
export {Todos}