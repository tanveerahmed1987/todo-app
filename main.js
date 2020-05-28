
const todos = ;



const obj = {
    todos: [
        { id: 1, todo: 'Hit the gym', isCompleted: false },
        { id: 2, todo: 'Pay bills', isCompleted: true },
        { id: 3, todo: 'Meet George', isCompleted: false },
        { id: 4, todo: 'Buy Eggs', isCompleted: false },
        { id: 5, todo: 'Read a book', isCompleted: false },
        { id: 6, todo: 'Organize office', isCompleted: false },
        { id: 7, todo: 'Watch movie', isCompleted: false },]
};

const id = 2;


let r = todos.map(function (todo) {
    if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
    }
    return todo;
});

console.log(r);