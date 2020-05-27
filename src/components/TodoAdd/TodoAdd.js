import React from 'react';
import './TodoAdd.css';

function TodoAdd() {
    console.log('TodoAdd Rendering...');

    return (
        <div className="header">
            <h2>My To Do List</h2>
            <div className="input-control">
                <input type="text" placeholder="Title..." />
                <span className="addBtn">Add</span>
            </div>
        </div>
    )
}

export default TodoAdd;
