import React, { useEffect, useReducer, useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoTasks from "../ToDoTasks/ToDoTasks";
import reducer from "../../useReducer";
import "./todo.css";

const tasks = localStorage.getItem("tasks")
	? JSON.parse(localStorage.getItem("tasks"))
	: [];

const ToDo = () => {
	const [state, dispatch] = useReducer(reducer, tasks);
	const [task, setTask] = useState("");

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(state));
	}, [state]);

	const onAdd = () => {
		if (!task) {
			alert("Please write a text first");
		} else {
			dispatch({
				type: "add",
				act: task,
				status: false,
			});

			setTask("");
		}
	};

	const onDone = (id, status) => {
		dispatch({
			type: "done",
			act: id,
			status: status ? false : true,
		});
	};

	const onDelete = (id) =>
		dispatch({
			type: "delete",
			act: id,
		});

	return (
		<div className={`todo-container ${state.length === 0 && "non-active"}`}>
			<div className="todo-title">Awesome Todo List</div>

			{/* TODO FORM */}
			<ToDoForm onAdd={onAdd} task={task} setTask={setTask} />

			{/* TODO TASKS */}
			{state.length > 0 && (
				<ToDoTasks tasks={state} onDone={onDone} onDelete={onDelete} />
			)}
		</div>
	);
};

export default ToDo;
