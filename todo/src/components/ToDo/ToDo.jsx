import React, { useReducer, useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoTasks from "../ToDoTasks/ToDoTasks";
import { tasks } from "../../initialTasks";
import reducer from "../../useReducer";
import "./todo.css";

const ToDo = () => {
	const [state, dispatch] = useReducer(reducer, tasks);

	const [text, setText] = useState("");

	// useEffect(() => {
	// 	console.log(state);
	// }, [state]);

	const onAdd = () => {
		if (!text) {
			alert("Please write a text first");
		} else {
			dispatch({
				type: "add",
				payload: text,
			});

			setText("");
		}
	};

	return (
		<div className="todo-container">
			<div className="todo-title">Awesome Todo List</div>
			<ToDoForm onAdd={onAdd} text={text} setText={setText} />
			<ToDoTasks tasks={state} dispatch={dispatch} />
		</div>
	);
};

export default ToDo;
