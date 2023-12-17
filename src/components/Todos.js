import React from "react";
import { useSelector } from "react-redux";
import { removeTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";
function Todos() {
    const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div>Todos</div>
      <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div>{todo.text}</div>
          <button onClick={()=>{dispatch(removeTodo(todo.id))}}>X</button>
        </li>
      ))}
      </ul>
    </>
  );
}

export default Todos;
