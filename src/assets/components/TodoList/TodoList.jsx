import React from 'react'

const TodoList = ({todos, onDelete, onToggle}) => {
    if(todos.length === 0){
        return <p>No added tasks added yet.</p>
    }
  return (
        <ul style={{padding: 0, margin: 0, listStyle: "none"}}>
        {todos.map((todo) => (
            <li key={todo.id}>
                <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
                {todo.text}
                <button onClick={() => onDelete(todo.id)}>
                    ✕
                </button>
            </li>
        ))}
        </ul>
        
  )
}

export default TodoList
