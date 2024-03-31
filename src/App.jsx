import React from 'react';
import './App.css';
import TaskList  from './component/TaskList/TaskList';
import { Provider } from 'react-redux';
import { store } from './app/store/store'

function App() {

  return (
    <Provider store={store}>
    <div className='main'>
      <h1>Welcome to the TODO APP.</h1>
      <TaskList />
    </div>
    </Provider>
  )
}

export default App
