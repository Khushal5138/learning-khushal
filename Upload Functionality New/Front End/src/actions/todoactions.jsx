// export const ADD_TODO = 'ADD_TODO';
// export const DELETE_TODO = 'DELETE_TODO';
// export const DELETE_ALL_TODOS = 'DELETE_ALL_TODOS';
// export const EDIT_TODO = 'EDIT_TODO';

// export const addAction = (todo) => ({
//     type: ADD_TODO,
//     todo
// });

// export const asyncAddAction = (name, status) => {
//     return (dispatch) => {
//         setTimeout(() => {
//             dispatch({
//                 type: ADD_TODO,
//                 todo: { name, status }
//             });
//         }, 4000);
//     };
// };

// export const deleteAction = (index) => ({
//     type: DELETE_TODO,
//     index
// });

// export const deleteAllAction = () => ({
//     type: DELETE_ALL_TODOS
// });

// export const editAction = (index, name, status) => ({
//     type: EDIT_TODO,
//     index,
//     name,
//     status
// });

import axios from 'axios';

export const LOAD_TODOS = 'LOAD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ALL_TODOS = 'DELETE_ALL_TODOS';
export const EDIT_TODO = 'EDIT_TODO';

export const loadData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/todos');
            dispatch({
                type: LOAD_TODOS,
                todos: response.data
            });
        } catch (error) {
            console.error('Error loading todos:', error);
        }
    };
};

export const asyncAddAction = (name, status) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/todos', { name, status });
            dispatch({
                type: ADD_TODO,
                todo: response.data
            });
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };
};

export const asyncDeleteAction = (index) => {
    return async (dispatch, getState) => {
        try {
            const todoId = getState().todos.todos[index].id;
            console.log(index);
            await axios.delete(`http://localhost:3001/todos/${todoId}`);
            dispatch({
                type: DELETE_TODO,
                index
            });
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };
};

export const asyncDeleteAllAction = () => {
    return async (dispatch) => {
        try {
            await axios.delete('http://localhost:3001/todos');
            dispatch({
                type: DELETE_ALL_TODOS
            });
        } catch (error) {
            console.error('Error deleting all todos:', error);
        }
    };
};

export const asyncEditAction = (index, name, status) => {
    return async (dispatch, getState) => {
        try {
            const todoId = getState().todos.todos[index].id;
            const response = await axios.put(`http://localhost:3001/todos/${todoId}`, { name, status });
            dispatch({
                type: EDIT_TODO,
                index,
                todo: response.data  
            });
        } catch (error) {
            console.error('Error editing todo:', error);
        }
    };
};
