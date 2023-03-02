import React, {useState} from 'react';
import './Todos.css';


function Todos() {
  const[newTodo, setNewTodo] = useState('');
  const[Task, setTask] = useState([]);

  function addTodo(){
    if(!newTodo){
      alert("Enter a Task");
      return;
    }

    const job = {
      id: Math.floor(Math.random() * 1000),
      value: newTodo,
      completed: false
    };

    setTask([...Task, job]);
    setNewTodo('');

    console.log(Task);
  };

  function deleteTodo(id){
    const newArr = Task.filter(job => job.id !==id);
    setTask(newArr);
  };

  function handleCheck(id){
    Task.map(job => {
      if (job.id === id) {
        if (job.completed === true) {
          return job.completed = false;
        } else {
          return job.completed = true;
        }
        
      } else {
        return job;
      }
    })
    console.log('task completed');

  }


  return (
    <div className="container">
      <div className="head">
        <h1 className="header">My Todo List</h1>
        <input type="text" 
               className="task" 
               placeholder='Enter new task'
               value={ newTodo }
               onChange = {e=> setNewTodo (e.target.value)}/>
        <button onClick={()=> addTodo()} className="addTask">Add Task</button>
      </div> 
      <div className="taskSection">
        <ul>
          {Task.map(job =>{
            return(
              <li key={job.id}> {job.value}
                <input type="checkbox" className='checkbox' onChange={()=> handleCheck(job.id)}/>
                <button onClick={()=> deleteTodo(job.id)} className="delTodo">Remove Task</button> 
              </li>
            )
          }
          )}
        </ul>
        </div>
    </div>

  );
}

export default Todos;

