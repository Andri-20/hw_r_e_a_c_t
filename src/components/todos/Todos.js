import {useEffect, useState} from "react";
import {getTodos} from "../service";
import {Todo} from "../todo";

const Todos = () => {

  let [todos,setTodos] = useState({});
   useEffect(()=>{
       getTodos().then(todos=>{
           setTodos(todos)
       })
   },[])
    return (
        <div>
            {todos.map((todo=><Todo todo={todo} key={todo.id}/>))}
        </div>
    );
};
export {Todos}