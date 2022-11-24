import { useState } from "react";
 
export default function SingleComponentTodolist() {
  const [todos, setTodos] = useState([]);
  const [inp, setInp] = useState("");

 
  function handleInputChange(e) {
    setInp(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
     setTodos([
        ...todos,{
          id: todos.length + 1,
          text: inp,
        }
      ]);}

  function del(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  return (
    <div className="App">
        <input name="todo" type="text"placeholder="Create a new todo"
          value={inp}
          onChange={handleInputChange}  
        />
            <button onClick={handleFormSubmit}>Add Data</button>

      <ul className="todo-list">
        {
        todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => del(todo.id)}>Delete</button>
          </li> 
        ))}
      </ul>
    </div>
  );
}