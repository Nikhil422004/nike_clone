// userReducer.js

const initialState = {
  user: JSON.parse(localStorage.getItem("userData")) || null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return { ...state, user: action.payload, loading: false, error: null };
    case "LOGIN_FAIL":
    case "SIGNUP_FAIL":
      return { ...state, user: null, loading: false, error: action.payload };
    case "LOGOUT":
      return { ...state, user: null, loading: false, error: null };
    default:
      return state;
  }
};

export default userReducer;
