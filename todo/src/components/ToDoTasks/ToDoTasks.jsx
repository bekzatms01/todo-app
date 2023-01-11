import ToDoTask from "./ToDoTask/ToDoTask";
import { tasks } from "../../initialTasks";
import "./todo-tasks.css";

const ToDoTasks = () => {
	return (
		<div className="todo-tasks">
			{tasks.map((item) => {
				return <ToDoTask task={item} key={item.id} />;
			})}
		</div>
	);
};

export default ToDoTasks;
