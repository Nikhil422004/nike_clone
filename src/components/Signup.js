import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../redux/action/userActions";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser({ email, password, name }));
    setName("");
    setEmail("");
    setPassword("");
    navigate("/"); // Navigate to home page
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
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
        <button type="submit">Sign Up</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
