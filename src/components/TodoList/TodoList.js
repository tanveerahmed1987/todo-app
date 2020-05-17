import React from 'react';
import './TodoList.css';

function TodoList() {

    const list = [{ id: 1, todo: 'Hit the gym' },
    { id: 2, todo: 'Pay bills' },
    { id: 3, todo: 'Meet George' },
    { id: 4, todo: 'Buy Eggs' },
    { id: 5, todo: 'Read a book' },
    { id: 6, todo: 'Organize office' },
    { id: 7, todo: 'Watch movie' },];


    return (
        <div>
            <ul>
                {list.map((item) => {
                    return <li>{item.todo} <span className="close">{'\u00D7'}</span></li>
                })}
            </ul>
        </div>
    )
}

export default TodoList;

