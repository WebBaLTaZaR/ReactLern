import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/taskSlice";
function TasksList() {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  if (loading) return <p> Загрузка задач..</p>;
  if (error) return <p>ошибка {error}</p>;
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? "Выполнено" : "Не выполнено"}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TasksList;
