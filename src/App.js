import React, { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';

function App() {
  console.log('App Rendering...');

  const [state, setState] = useState({
    todos: [
      { id: 1, todo: 'Hit the gym', isCompleted: false },
      { id: 2, todo: 'Pay bills', isCompleted: true },
      { id: 3, todo: 'Meet George', isCompleted: false },
      { id: 4, todo: 'Buy Eggs', isCompleted: false },
      { id: 5, todo: 'Read a book', isCompleted: false },
      { id: 6, todo: 'Organize office', isCompleted: false },
      { id: 7, todo: 'Watch movie', isCompleted: false }],
  })


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

  return (
    <>
      <TodoAdd />
      <TodoList
        todos={state.todos}
        completeTodo={toggleTodoState}
        deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
