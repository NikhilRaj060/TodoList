import React from 'react'
import './TaskList.css'
import Task from './Task/Task.jsx'
import AddTask from './AddTask/AddTask.jsx'

function TaskList() {
  return (
    <div className='taskList'>
      <h1 className='todo-header'>Task List</h1>
      <AddTask />
      <Task />
    </div>
  )
}

export default TaskList