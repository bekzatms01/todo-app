import ToDoTask from "./ToDoTask/ToDoTask";
import "./todo-tasks.css";

const ToDoTasks = ({ tasks, onDone, onDelete }) => {
	return (
		<div className="todo-tasks">
			{tasks.map((item) => {
				return (
					<ToDoTask
						task={item}
						key={item.id}
						onDone={onDone}
						onDelete={onDelete}
					/>
				);
			})}
		</div>
	);
};

export default ToDoTasks;
