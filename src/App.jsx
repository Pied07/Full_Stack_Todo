import { useState } from 'react'
import {FaCheck} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [task,setTask] = useState("")

  const AddTasks = () => {
    if (task.trim()){
      const newTask = {text:task,status:false}
      setTasks([...tasks,newTask])
      setTask("")
    } else {
      alert("Please add a Task First!!!")
    }
  }

  const ChangeStatus = (index) => {
    const updatedTask = tasks.map((t,i) => 
      i === index ? {...t,status: !t.status} : t
    )
    setTasks(updatedTask)
  }

  const DeleteTask = (index) => {
    const updatedTask = tasks.filter((_,i) => i !== index)
    setTasks(updatedTask)
  }

  return (
    <>
      <h1>Todo Application</h1> <hr /><br /><br />
        <div className="addTask">
          <input type="text" placeholder='Enter Task Name' value={task} onChange={(e) => setTask(e.target.value)} />
          <button className='add' onClick={AddTasks}>Add</button>
        </div>
        <h3>Task Lists:</h3> <hr />
      <div className="show">
        {tasks.length === 0 ? (
          <p>Sorry No Task Added Yet!!!</p>
        ) : (
          <div>
            {tasks.map((task,index) => (
            <><div className="tasks" key={index}>
                {task.status ? (
                  <div className="tick"><FaCheck style={{ color: 'green' }}></FaCheck></div>
                ) : (
                  <div className="loader"></div>
                )}
                <p>{task.text}</p>
                <div className="actions">
                  <button onClick={() => ChangeStatus(index)} className={task.status ? 'Completed' : 'Pending'}>
                    {task.status ? 'Completed' : 'Pending'}
                  </button>
                  <button className='delete' onClick={() => DeleteTask(index)}><AiFillDelete></AiFillDelete></button>
                </div>
              </div><hr /></>
          ))}
          </div>
        )}
      </div>
    </>
  )
}

export default App
