import ToDoTask from "./ToDoTask/ToDoTask";
import "./todo-tasks.css";

const ToDoTasks = ({ tasks, dispatch }) => {
	return (
		<div className="todo-tasks">
			{tasks.map((item) => {
				return <ToDoTask task={item} key={item.id} dispatch={dispatch} />;
			})}
		</div>
	);
};

export default ToDoTasks;
