import React from "react";

const ToDoTask = ({ task, onDone, onDelete }) => {
	return (
		<div className="task">
			<div className="task-left">
				<input
					type="checkbox"
					id={task.id}
					onChange={() => onDone(task.id, task.status)}
				/>

				<label htmlFor={task.id} className={`${task.status && "done"}`}>
					{task.title}
				</label>
			</div>

			<div className="task-right">
				<i className="fa-solid fa-trash" onClick={() => onDelete(task.id)}></i>
			</div>
		</div>
	);
};

export default ToDoTask;
