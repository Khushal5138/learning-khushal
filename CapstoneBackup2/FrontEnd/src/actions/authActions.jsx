import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

const API_URL = "http://localhost:5000"; // Replace with your API URL

export const login = (phone, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post(`${API_URL}/customer/login`, {
      phone,
      password,
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
    // Optionally store token in local storage or cookies
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
