import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  if (!userData) return <div>No user data available</div>;

  return (
    <div>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserProfile;
