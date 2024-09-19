// reducers/serviceAuthReducer.js

import {
  SERVICE_LOGIN_REQUEST,
  SERVICE_LOGIN_SUCCESS,
  SERVICE_LOGIN_FAILURE,
} from "../actions/serviceAuthActions";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const serviceAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICE_LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case SERVICE_LOGIN_SUCCESS:
      console.log("Reducer Payload:", action.payload);
      const newState = {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
      return newState;
    case SERVICE_LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default serviceAuthReducer;
