import React from "react";
import { Outlet } from "react-router-dom";

const Profile = () => (
  <div>
    <h1>Profile</h1>
    <Outlet />
  </div>
);

export default Profile;
