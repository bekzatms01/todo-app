import React from "react";
import "./todo-form.css";

const ToDoForm = ({ onAdd, task, setTask }) => {
	return (
		<div className="todo-form">
			<input
				type="text"
				id="title"
				placeholder="What do you need to do today?"
				value={task}
				onChange={(e) => setTask(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						onAdd();
					}
				}}
			/>
			<button onClick={onAdd} className="btn-add">
				Add
			</button>
		</div>
	);
};

export default ToDoForm;
