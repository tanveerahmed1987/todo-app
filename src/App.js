import React, { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';

function App() {
  console.log('App Rendering...');

  const [state, setState] = useState({ todos: [] })


  const toggleTodoState = (id) => {
    console.log('toggleTodoState', id);
    state.todos.forEach(function (todo) {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    setState({ todos: [...state.todos] });
  }

  const deleteTodo = (index) => {
    console.log('deleteTodo', index);
    state.todos.splice(index, 1);
    setState({ todos: [...state.todos] });
  }

  const addTodo = (todo) => {
    console.log('addTodo', todo);
    let tempTodo = {
      id: state.todos.length + 1,
      todo: todo,
      isCompleted: false
    };
    state.todos.unshift(tempTodo);
    setState({ todos: [...state.todos] });
  }

  return (
    <>
      <TodoAdd addTodo={addTodo} />
      <TodoList
        todos={state.todos}
        completeTodo={toggleTodoState}
        deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
