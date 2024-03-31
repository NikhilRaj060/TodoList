import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Task.css";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { editTodo, removeTodo } from "../../../app/store/Todoslice";
function Task() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  const handleEdit = (todo) => {
    console.log(todo.id)
    // dispatch(editTodo(todo.id))
  }

  const handleDelete = (todo) => {
    dispatch(removeTodo(todo.id))
  }
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <div className="card" key={todo.id}>
            <li className="list-group-item">
              {todo.text}
            </li>
            <CiEdit className="edit-btn" color="blue" onClick={()=> handleEdit(todo)}/> 
            <FaRegTrashCan className="trash-btn" color="red" onClick={()=> handleDelete(todo)}/>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Task;
