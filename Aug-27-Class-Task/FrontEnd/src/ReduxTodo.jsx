// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { asyncAddAction, deleteAction, deleteAllAction } from './actions/todoactions';
// import { Link, Outlet } from 'react-router-dom';
// import './ReduxTodo.css';

// const ReduxTodo = () => {
//     const dispatch = useDispatch();
//     const todos = useSelector(state => state.todos.todos);

//     const addTodo = (e) => {
//         e.preventDefault();
//         const name = e.target.name.value;
//         const status = e.target.status.value;
//         dispatch(asyncAddAction(name, status)); 
//         e.target.reset();
//     };

//     const handleDelete = (index) => {
//         dispatch(deleteAction(index));
//     };

//     const handleDeleteAll = () => {
//         dispatch(deleteAllAction());
//     };

//     const renderAddForm = () => (
//         <form onSubmit={addTodo} className="form-container">
//             <input type="text" name="name" placeholder="Todo Name" required />
//             <select name="status" required>
//                 <option value="complete">Complete</option>
//                 <option value="incomplete">Incomplete</option>
//             </select>
//             <button type="submit">Add Todo</button>
//         </form>
//     );

//     const renderDelTodos = () => (
//         <div className="todos-container">
//             <button onClick={handleDeleteAll} className="delete-all-button">Delete All Todos</button>
//             {todos.length > 0 ? (
//                 todos.map((val, idx) => (
//                     <div key={idx} className="todo-item">
//                         <div>Name: {val.name}</div>
//                         <div>Status: {val.status}</div>
//                         <button onClick={() => handleDelete(idx)} className="delete-button">Delete</button>
//                         <Link to={`edit/${idx}`} className="edit-link">Edit</Link>
//                     </div>
//                 ))
//             ) : (
//                 <div>No todos available</div>
//             )}
//         </div>
//     );

//     return (
//         <div className="main-container">
//             {renderAddForm()}
//             {renderDelTodos()}
//             <Outlet />
//         </div>
//     );
// };

// export default ReduxTodo;


// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { loadData, asyncAddAction, asyncDeleteAction, asyncDeleteAllAction } from './actions/todoactions';
// import { Link, Outlet } from 'react-router-dom';
// import './ReduxTodo.css';

// const ReduxTodo = () => {
//     const dispatch = useDispatch();
//     const todos = useSelector(state => state.todos.todos);

//     useEffect(() => {
//         dispatch(loadData());  // Load todos when the component mounts
//     }, [dispatch]);

//     const addTodo = (e) => {
//         e.preventDefault();
//         const name = e.target.name.value;
//         const status = e.target.status.value;
//         dispatch(asyncAddAction(name, status));
//         e.target.reset();
//     };

//     const handleDelete = (index) => {
//         dispatch(asyncDeleteAction(index));
//     };

//     const handleDeleteAll = () => {
//         dispatch(asyncDeleteAllAction());
//     };

//     const renderAddForm = () => (
//         <form onSubmit={addTodo} className="form-container">
//             <input type="text" name="name" placeholder="Todo Name" required />
//             <select name="status" required>
//                 <option value="complete">Complete</option>
//                 <option value="incomplete">Incomplete</option>
//             </select>
//             <button type="submit">Add Todo</button>
//         </form>
//     );

//     const renderDelTodos = () => (
//         <div className="todos-container">
//             <button onClick={handleDeleteAll} className="delete-all-button">Delete All Todos</button>
//             {todos.length > 0 ? (
//                 todos.map((val, idx) => (
//                     <div key={val.id} className="todo-item"> {/* Assuming each todo has a unique `id` */}
//                         <div>Name: {val.name}</div>
//                         <div>Status: {val.status}</div>
//                         <button onClick={() => handleDelete(idx)} className="delete-button">Delete</button>
//                         <Link to={`edit/${idx}`} className="edit-link">Edit</Link>
//                     </div>
//                 ))
//             ) : (
//                 <div>No todos available</div>
//             )}
//         </div>
//     );

//     return (
//         <div className="main-container">
//             {renderAddForm()}
//             {renderDelTodos()}
//             <Outlet />
//         </div>
//     );
// };

// export default ReduxTodo;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadData, asyncAddAction, asyncDeleteAction, asyncDeleteAllAction } from './actions/todoactions';
import { Link, Outlet } from 'react-router-dom';
import './ReduxTodo.css';

const ReduxTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);

    useEffect(() => {
        dispatch(loadData()); 
    }, []);

    const addTodo = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const status = e.target.status.value;
        dispatch(asyncAddAction(name, status));
        e.target.reset();
    };

    const handleDelete = (index) => {
        dispatch(asyncDeleteAction(index));
    };

    const handleDeleteAll = () => {
        dispatch(asyncDeleteAllAction());
    };

    const renderAddForm = () => (
        <form onSubmit={addTodo} className="form-container">
            <input type="text" name="name" placeholder="Todo Name" required />
            <select name="status" required>
                <option value="complete">Complete</option>
                <option value="incomplete">Incomplete</option>
            </select>
            <button type="submit">Add Todo</button>
        </form>
    );

    const renderDelTodos = () => (
        <div className="todos-container">
            <button onClick={handleDeleteAll} className="delete-all-button">Delete All Todos</button>
            {todos.length > 0 ? (
                todos.map((val, idx) => (
                    <div key={val.id} className="todo-item"> 
                        <div>Name: {val.name}</div>
                        <div>Status: {val.status}</div>
                        <button onClick={() => handleDelete(val.id)} className="delete-button">Delete</button>
                        <Link to={`edit/${idx}`} className="edit-link">Edit</Link>
                    </div>
                ))
            ) : (
                <div>No todos available</div>
            )}
        </div>
    );

    return (
        <div className="main-container">
            {renderAddForm()}
            {renderDelTodos()}
            <Outlet />
        </div>
    );
};

export default ReduxTodo;

