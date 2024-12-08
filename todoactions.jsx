// const addAction = (todo) => ({type : "ADD" , todo : todo});

// export { addAction };

// actions/todoactions.js
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ALL_TODOS = 'DELETE_ALL_TODOS';
export const EDIT_TODO = 'EDIT_TODO';

export const addAction = (name, status) => ({
    type: ADD_TODO,
    name,
    status
});

export const deleteAction = (index) => ({
    type: DELETE_TODO,
    index
});

export const deleteAllAction = () => ({
    type: DELETE_ALL_TODOS
});

export const editAction = (index, name, status) => ({
    type: EDIT_TODO,
    index,
    name,
    status
});
