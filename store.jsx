import { createStore } from "redux";
import CountReducer from "../reducers/CountReducers";
import TodosReducer from "../reducers/TodosReducer";

let store = createStore(TodosReducer);
export default store;