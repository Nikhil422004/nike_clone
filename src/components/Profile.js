// Profile.js

import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  if (!user) {
    return <p>Please Log In to view your Profile</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
