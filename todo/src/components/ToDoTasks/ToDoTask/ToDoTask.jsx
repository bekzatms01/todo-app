import React from "react";

const ToDoTask = ({ task }) => {
	return (
		<div className="task">
			<div className="task-title">
				{task.id}. {task.title}
			</div>
			<div className="task-buttons">
				<button className="btn-done">Done</button>
				<button className="btn-delete">Delete</button>
			</div>
		</div>
	);
};

export default ToDoTask;
