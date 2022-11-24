import React from 'react';
import './Form.css';


const Form = ({input,setInput,todos,setTodos}) => {
 const inp=(rabin)=>
 {
     setInput(rabin.target.value);
 }

    const submitTodo=(s)=>
    {
        s.preventDefault();
        setTodos([...todos,{
            text:input,
            id: todos.length+1,
        }]);
        

    }
    return <div>
        <form>
            
            <input className='inp' type="text" value={input} onChange={inp} ></input>
            <button type='submit' onClick={submitTodo}>+</button>
        </form>
    </div>;
}

export default Form;