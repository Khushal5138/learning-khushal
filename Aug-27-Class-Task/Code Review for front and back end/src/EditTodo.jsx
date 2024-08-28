// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { editAction } from './actions/todoactions';
// import { useNavigate, useParams, Link } from 'react-router-dom';
// import './ReduxTodo.css';

// const EditTodo = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { index } = useParams();
//     const todos = useSelector(state => state.todos);

//     const handleEdit = (e) => {
//         e.preventDefault();
//         const name = e.target.name.value;
//         const status = e.target.status.value;
//         dispatch(editAction(parseInt(index, 10), name, status));
//         navigate('/');
//     };

//     const todo = todos[parseInt(index, 10)] || { name: '', status: 'incomplete' };

//     return (
//         <div className="edit-form-container">
//             <form onSubmit={handleEdit} className="form-container edit-form">
//                 <input type="text" name="name" defaultValue={todo.name} required />
//                 <select name="status" defaultValue={todo.status} required>
//                     <option value="complete">Complete</option>
//                     <option value="incomplete">Incomplete</option>
//                 </select>
//                 <button type="submit">Save</button>
//                 <Link to="/" className="cancel-link">Cancel</Link>
//             </form>
//         </div>
//     );
// };

// export default EditTodo;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncEditAction } from './actions/todoactions';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './ReduxTodo.css';

const EditTodo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { index } = useParams();
    const todos = useSelector(state => state.todos.todos);

    useEffect(() => {
        if (todos.length === 0) {
            navigate('/');
        }
    }, [todos, navigate]);

    const handleEdit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const status = e.target.status.value;
        dispatch(asyncEditAction(parseInt(index), name, status));
        navigate('/');
    };

    const todo = todos[index] || { name: '', status: 'incomplete' };

    return (
        <div className="edit-form-container">
            <form onSubmit={handleEdit} className="form-container edit-form">
                <input type="text" name="name" defaultValue={todo.name} required />
                <select name="status" defaultValue={todo.status} required>
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <button type="submit">Save</button>
                <Link to="/" className="cancel-link">Cancel</Link>
            </form>
        </div>
    );
};

export default EditTodo;
