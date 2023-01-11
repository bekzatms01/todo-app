import React from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoTasks from "../ToDoTasks/ToDoTasks";
import "./todo.css";

const ToDo = () => {
	return (
		<div className="todo-container">
			<h2 className="todo-title">ToDo Project</h2>
			<ToDoForm />
			<ToDoTasks />
		</div>
	);
};

export default ToDo;
