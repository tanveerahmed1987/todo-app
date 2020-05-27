import React from 'react';
import './TodoList.css';

function TodoList(props) {

    console.log('TodoList Rendering...');


    return (
        <ul>
            {props.todos.map((item) => {
                return (
                    <li className={item.isCompleted ? 'checked' : ''} key={item.id} onClick={() => { props.completeTodo(item.id) }}>
                        {item.todo} <span className="close">{'\u00D7'}</span>
                    </li>);
            })}
        </ul>
    )
}

export default TodoList;

