// userActions.js

const localStorageKey = "userData";

export const loginUser = (userData) => (dispatch) => {
  // Simulate login by storing user data in local storage
  localStorage.setItem(localStorageKey, JSON.stringify(userData));
  dispatch({ type: "LOGIN_SUCCESS", payload: userData });
};

export const signUpUser = (userData) => (dispatch) => {
  // Simulate signup by storing user data in local storage
  localStorage.setItem(localStorageKey, JSON.stringify(userData));
  dispatch({ type: "SIGNUP_SUCCESS", payload: userData });
};

export const logoutUser = () => (dispatch) => {
  // Simulate logout by removing user data from local storage
  localStorage.removeItem(localStorageKey);
  dispatch({ type: "LOGOUT" });
};
