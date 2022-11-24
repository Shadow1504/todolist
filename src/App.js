
import { useState } from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';
import SingleComponentTodolist from './SingleComponentTodolist'
import Page from './Page';



function App() {
  // const[input,setInput]=useState("");
  // const[todos,setTodos]=useState([]);
  return (
   <div className='bg'>
     <h1 className='todo'>ToDo List</h1>
     
{/*   <Form input={input} todos={todos} setTodos={setTodos} setInput={setInput}></Form> 
  <TodoList  todos={todos} setTodos={setTodos} />  */}
              
  <SingleComponentTodolist/>  
     


   
   </div>

  )
}

export default App;
