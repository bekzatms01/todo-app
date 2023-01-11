import React from "react";
import "./todo-form.css";

const ToDoForm = ({ onAdd, text, setText }) => {
	return (
		<div className="todo-form">
			<input
				type="text"
				id="title"
				placeholder="What do you need to do today?"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button onClick={onAdd} className="btn-add">
				Add
			</button>
		</div>
	);
};

export default ToDoForm;
