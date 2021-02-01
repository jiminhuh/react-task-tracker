import './css/style.css';
import Header from './components/Header';
import { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "2021-02-05T14:30:00",
        reminder: true
    },
    {
        id: 2,
        text: "Meeting at School",
        day: "2021-02-06T13:30:00",
        reminder: true
    },
    {
        id: 3,
        text: "Food Shopping",
        day: "2021-02-05T14:30:00",
        reminder: false
    }
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  // console.log(id)
  setTasks(
    tasks.map((task) =>
      task.id === id ? {...task, reminder:
         !task.reminder} : task
      )
    )
}

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No Tasks to Show"}
    </div>
  );
}

export default App;
