import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/action/userActions";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SignInUp.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setEmail("");
    setPassword("");
    navigate("/"); // Navigate to home page
  };

  return (
    <>
      <h2>Login</h2>
      <div className="scontainer">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" className="btns">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
