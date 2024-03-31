import React, { useId, useState } from "react";
import "./AddTask.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../app/store/Todoslice";

function AddTask() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const existingIDs = [];
  const getRandomLetters = (length = 1) =>
    Array(length)
      .fill()
      .map((e) => String.fromCharCode(Math.floor(Math.random() * 26) + 65))
      .join("");
  const getRandomDigits = (length = 1) =>
    Array(length)
      .fill()
      .map((e) => Math.floor(Math.random() * 10))
      .join("");
  const generateUniqueID = () => {
    let id = getRandomLetters(2) + getRandomDigits(4);
    while (existingIDs.includes(id))
      id = getRandomLetters(2) + getRandomDigits(4);
      existingIDs.push(id);
    return id;
  };

  const newID = generateUniqueID();

  const handlClick = () => {
    if (input === "") return;
    const newItem = { text: input, id: newID };
    dispatch(addTodo(newItem));
    setInput("");
  };

  return (
    <>
      <div>
        <input
          className="input-btn"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="add-btn" onClick={handlClick}>
          {" "}
          Add Task{" "}
        </button>
      </div>
    </>
  );
}

export default AddTask;
