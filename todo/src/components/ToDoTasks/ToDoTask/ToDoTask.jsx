import React from "react";

const ToDoTask = ({ task, dispatch }) => {
	return (
		<div className="task">
			<div className="task-left">
				<input
					type="checkbox"
					id={task.id}
					onChange={() => {
						dispatch({
							type: "done",
							payload: task.id,
							status: task.status ? false : true,
						});
					}}
				/>

				<label htmlFor={task.id} className={`${task.status && "done"}`}>
					{task.title}
				</label>
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
