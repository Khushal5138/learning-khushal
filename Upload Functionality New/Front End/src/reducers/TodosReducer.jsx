// import { ADD_TODO, DELETE_TODO, DELETE_ALL_TODOS, EDIT_TODO } from '../actions/todoactions';

// const initialState = {
//     todos: []
// };

// const todoReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos: [...state.todos, action.todo]
//             };
//         case DELETE_TODO:
//             return {
//                 ...state,
//                 todos: state.todos.filter((_, index) => index !== action.index)
//             };
//         case DELETE_ALL_TODOS:
//             return {
//                 ...state,
//                 todos: []
//             };
//         case EDIT_TODO:
//             return {
//                 ...state,
//                 todos: state.todos.map((todo, index) =>
//                     index === action.index ? { name: action.name, status: action.status } : todo
//                 )
//             };
//         default:
//             return state;
//     }
// };

// export default todoReducer;


import { LOAD_TODOS, ADD_TODO, DELETE_TODO, DELETE_ALL_TODOS, EDIT_TODO } from '../actions/todoactions';

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TODOS:
            return {
                ...state,
                todos: action.todos 
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.index)
            };
        case DELETE_ALL_TODOS:
            return {
                ...state,
                todos: []
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.index ? { name: action.name, status: action.status } : todo
                )
            };
        default:
            return state;
    }
};

export default todoReducer;




