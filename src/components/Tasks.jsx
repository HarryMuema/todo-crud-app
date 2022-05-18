import Task from "./Task";

const Tasks = ({ tasks, onDelete, remindMe }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          remindMe={remindMe}
        />
      ))}
    </>
  );
};

export default Tasks;
