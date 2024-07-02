const localStorageKey = "userData";

export const loginUser = (userData) => (dispatch) => {
  localStorage.setItem(localStorageKey, JSON.stringify(userData));
  dispatch({ type: "LOGIN_SUCCESS", payload: userData });
};

export const signUpUser = (userData) => (dispatch) => {
  localStorage.setItem(localStorageKey, JSON.stringify(userData));
  dispatch({ type: "SIGNUP_SUCCESS", payload: userData });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem(localStorageKey);
  dispatch({ type: "LOGOUT" });
};
