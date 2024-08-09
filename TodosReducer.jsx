// const initialState = {
//     todos : [
//         {name : "default todo1" , status : "complete"},
//         {name : "default todo2" , status : "incomplete"},
//     ],
// };

// const TodosReducer = (state = initialState , action) => {
//     if(action.type == "ADD") {
//         let newTodos = [...state.todos , action.todo];
//         let newState = {...state , todos : newTodos};
//         return newState;
//     }
//     return state;
// }
// export default TodosReducer;

// reducers/todoReducer.js
// reducers/todoReducer.js
import { ADD_TODO, DELETE_TODO, DELETE_ALL_TODOS, EDIT_TODO } from '../actions/todoactions';

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { name: action.name, status: action.status }]
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

