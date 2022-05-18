import { BsFillPlusCircleFill } from "react-icons/bs";
import Tasks from "./Tasks";
import Addtask from "./Addtask";
import { useState, useEffect } from "react";

function InProgress() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const serverTasks = await fetchTasks();
      setTasks(serverTasks);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:4000/tasks");
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

 const addTask= async (task)=>{
   const res=await fetch('http://localhost:4000/tasks',{
     method:'POST',
     headers:{
       'Content-type':'application/json'
     },
     body:JSON.stringify(task)
   })

   const data=await res.json()

   setTasks([...tasks,data])
 }

 const updateTask=(todoId,newValue)=>{
  
  setTasks(prev=>prev.map(item=>item.id===todoId? newValue:item))
 }

 const completeTask=(id)=>{
  
   let updatedTasks=tasks.map(task=>{
     if(task.id===id){
       task.isComplete=!task.isComplete
     }
     return task
   })
   setTasks(updatedTasks)
 }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:4000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:4000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !data.reminder } : task
      )
    );
  };
  return (
    <div className="holder overdue container-fluid">
      <div className="overdue-title">In progress</div>
      {showAddTask && <Addtask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} remindMe={toggleReminder} onUpdate={updateTask} onComplete={completeTask}/>
      ) : (
        "No tasks available"
      )}
      <div className="ADD">
        <BsFillPlusCircleFill onClick={() => setShowAddTask(!showAddTask)} />
        
      </div>
    </div>
  );
}

export default InProgress;
