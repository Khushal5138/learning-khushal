// // actions/serviceAuthActions.js

// export const SERVICE_LOGIN_REQUEST = "SERVICE_LOGIN_REQUEST";
// export const SERVICE_LOGIN_SUCCESS = "SERVICE_LOGIN_SUCCESS";
// export const SERVICE_LOGIN_FAILURE = "SERVICE_LOGIN_FAILURE";

// export const serviceLogin = (email, password) => async (dispatch) => {
//   dispatch({ type: SERVICE_LOGIN_REQUEST });

//   try {
//     const response = await fetch(
//       "http://localhost:5000/serviceProvider/login",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Login failed");
//     }

//     const data = await response.json();

//     // Optionally, store user data or token in localStorage
//     localStorage.setItem("token", JSON.stringify(data.token));

//     dispatch({
//       type: SERVICE_LOGIN_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     console.error("Login Error:", error);
//     dispatch({
//       type: SERVICE_LOGIN_FAILURE,
//       payload: error.message,
//     });
//   }
// };

export const SERVICE_LOGIN_REQUEST = "SERVICE_LOGIN_REQUEST";
export const SERVICE_LOGIN_SUCCESS = "SERVICE_LOGIN_SUCCESS";
export const SERVICE_LOGIN_FAILURE = "SERVICE_LOGIN_FAILURE";
export const SERVICE_LOGOUT = "SERVICE_LOGOUT"; // Added logout action type

// Action to log in service provider
export const serviceLogin = (email, password) => async (dispatch) => {
  dispatch({ type: SERVICE_LOGIN_REQUEST });

  try {
    const response = await fetch(
      "http://localhost:5000/serviceProvider/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();

    // Optionally, store user data or token in localStorage
    localStorage.setItem("token", JSON.stringify(data.token));

    dispatch({
      type: SERVICE_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Login Error:", error);
    dispatch({
      type: SERVICE_LOGIN_FAILURE,
      payload: error.message,
    });
  }
};

// Action to log out service provider
export const serviceLogout = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("token");

  // Dispatch action to reset the user state
  dispatch({
    type: SERVICE_LOGOUT,
  });
};
