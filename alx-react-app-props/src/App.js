import React from 'react';
import { UserContext } from './UserContext';
import UserProfile from './components/UserProfile';

function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ padding: 20 }}>
        <h1>Profile</h1>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
