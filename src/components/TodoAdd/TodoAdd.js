import React, { useState } from 'react';
import './TodoAdd.css';

function TodoAdd({ addTodo }) {
    console.log('TodoAdd Rendering...');
    const [todo, setTodo] = useState('');

    const updateTodo = (e) => {
        setTodo(e.target.value);
    }

    const todoAdd = () => {
        if (todo && todo.length > 0) {
            addTodo(todo);
            setTodo('');
        }
    }

    return (
        <div className="header">
            <h2>My To Do List</h2>
            <div className="input-control">
                <input type="text" placeholder="Title..." value={todo} onChange={updateTodo} />
                <span className="addBtn" onClick={todoAdd}>Add</span>
            </div>
        </div>
    )
}

export default TodoAdd;
