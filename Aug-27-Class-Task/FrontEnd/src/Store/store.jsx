import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import CountReducer from '../reducers/CountReducers';  
import TodoReducer from '../reducers/TodosReducer';
import exampleMiddleware from '../middlewares/ExampleMiddleware';

const store = createStore(
    combineReducers({ count: CountReducer, todos: TodoReducer }),
    applyMiddleware(thunk , exampleMiddleware),
);

export default store;
