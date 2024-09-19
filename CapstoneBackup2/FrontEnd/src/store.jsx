import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer"; // Assuming this handles user authentication
import serviceAuthReducer from "./reducers/serviceAuthReducer"; // Your service provider authentication reducer

const rootReducer = combineReducers({
  auth: authReducer,
  serviceAuth: serviceAuthReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
