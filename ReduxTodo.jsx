// import { useSelector , useDispatch } from "react-redux";
// import { addAction } from "./actions/todoactions";

// const ReduxTodo = () => {
//     const dispatch = useDispatch();

//     const todos = useSelector((state) => {
//         console.log(state.todos);
//         return state.todos;
//     });

//     const addTodo = (e) => {
//         e.preventDefault();
//         const todo = { name : e.target.name.value , status : e.target.status.value};
//         dispatch(addAction(todo));
//     };

//     return (
//         <div>
//             <form onSubmit={addTodo}>
//                 <input type="text" name="name"/>
//                 <select name="status">
//                     <option value="complete">Complete</option>
//                     <option value="incomplete">Incomplete</option>
//                 </select>
//                 <button >Add Todo</button>
//             </form>
//             {todos.map((val, index) => {
//                 return (
//                     <div>
//                         <div>Name : {val.name} </div>
//                         <div>Status : {val.status} </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default ReduxTodo;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAction, deleteAction, deleteAllAction, editAction } from './actions/todoactions';
import { useNavigate, useParams, Link } from 'react-router-dom';

const ReduxTodo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { index } = useParams(); // For editing
    const todos = useSelector(state => state.todos);

    // Handle form submission to add a new todo
    const addTodo = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const status = e.target.status.value;
        dispatch(addAction(name, status));
        e.target.reset(); // Reset form after submission
    };

    // Handle deleting a specific todo
    const handleDelete = (index) => {
        dispatch(deleteAction(index));
    };

    // Handle deleting all todos
    const handleDeleteAll = () => {
        dispatch(deleteAllAction());
    };

    // Handle editing a specific todo
    const handleEdit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const status = e.target.status.value;
        dispatch(editAction(parseInt(index), name, status));
        navigate('/'); // Navigate back after editing
    };

    // Render form for adding a new todo
    const renderAddForm = () => (
        <form onSubmit={addTodo}>
            <input type="text" name="name" placeholder="Todo Name" required />
            <select name="status" required>
                <option value="complete">Complete</option>
                <option value="incomplete">Incomplete</option>
            </select>
            <button type="submit">Add Todo</button>
        </form>
    );

    // Render list of todos with delete and edit options
    const renderTodos = () => (
        <div>
            <button onClick={handleDeleteAll}>Delete All Todos</button>
            {todos.map((val, idx) => (
                <div key={idx}>
                    <div>Name: {val.name}</div>
                    <div>Status: {val.status}</div>
                    <button onClick={() => handleDelete(idx)}>Delete</button>
                    <Link to={`/edit/${idx}`}>Edit</Link>
                </div>
            ))}
        </div>
    );

    // Render the edit form
    const renderEditForm = () => {
        const todo = todos[index] || { name: '', status: 'incomplete' };

        return (
            <form onSubmit={handleEdit}>
                <input type="text" name="name" defaultValue={todo.name} required />
                <select name="status" defaultValue={todo.status} required>
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <button type="submit">Save</button>
                <Link to="/">Cancel</Link>
            </form>
        );
    };

    return (
        <div>
            {index !== undefined ? renderEditForm() : (
                <div>
                    <h1>Todo List</h1>
                    {renderAddForm()}
                    {renderTodos()}
                </div>
            )}
        </div>
    );
};

export default ReduxTodo;


