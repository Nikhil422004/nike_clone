// Profile.js

import React from "react";
import { useSelector } from "react-redux";
import "./SignInUp.css";

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  if (!user) {
    return (
      <p className="container">
        <strong>Please Log In to view your Profile</strong>
      </p>
    );
  }

  return (
    <>
      <h2>User Profile</h2>
      <div className="pcontainer">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </>
  );
};

export default Profile;
