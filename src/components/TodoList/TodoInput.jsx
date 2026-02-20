import React, { useState } from 'react'

const TodoInput = ({onAdd}) => {
    const[input, setInput] = useState("");
    const handleAdd = () =>{
        if(input.trim() === "") return;
        onAdd(input.trim());
        setInput("");
    }
  return (
    <div>
        <input type='text' value={input} placeholder='Add a new task' onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleAdd()}/>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput
