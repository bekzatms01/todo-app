import React from "react";

const ToDoTask = ({ task, dispatch }) => {
	return (
		<div className="task">
			<div
				className="task-left"
				onClick={() => {
					dispatch({
						type: "done",
						payload: task.id,
						status: task.status ? false : true,
					});
				}}
			>
				<input type="checkbox" id={task.id} />

				<span className={`${task.status && "done"}`}>{task.title}</span>
			</div>

			<div className="task-right">
				<i
					className="fa-solid fa-trash"
					onClick={() =>
						dispatch({
							type: "delete",
							payload: task.id,
						})
					}
				></i>
			</div>
		</div>
	);
};

export default ToDoTask;
