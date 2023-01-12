import React, { useEffect, useReducer, useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoTasks from "../ToDoTasks/ToDoTasks";
import { tasks } from "../../initialTasks";
import reducer from "../../useReducer";
import "./todo.css";

const ToDo = () => {
	const [state, dispatch] = useReducer(reducer, tasks);

	const [text, setText] = useState("");

	useEffect(() => {
		console.log(state);
	}, [state]);

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
		<div className={`todo-container ${state.length === 0 && "non-active"}`}>
			<div className="todo-title">Awesome Todo List</div>
			<ToDoForm onAdd={onAdd} text={text} setText={setText} />
			{state.length > 0 && <ToDoTasks tasks={state} dispatch={dispatch} />}
		</div>
	);
};

export default ToDo;
