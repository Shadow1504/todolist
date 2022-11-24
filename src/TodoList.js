import React from 'react';
import './Todo.css';

    const TodoList = ({todos,setTodos}) => {

    
      const handleRemove = (id) => {
        const rem = todos.filter((todo) => todo.id !== id);
        setTodos(rem);
        
      };
    return <div>
        <ul>
            {
                todos.map(todo=>(
                    <li >{todo.text}{todo.id}
                     <button className='button' onClick={() => handleRemove(todo.id)}>Delete</button></li>
                ))
            }
        </ul>
    </div>;
}

export default TodoList;