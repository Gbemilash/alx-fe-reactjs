import React from 'react';

export default function UserProfile({ name, age, bio }) {
  return (
    <div style={{
      border: '1px solid gray',
      padding: '10px',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ color: 'blue', fontSize: '1.4rem', margin: '0 0 8px 0' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p>Bio: {bio}</p>
    </div>
  );
}

UserProfile.defaultProps = {
  name: 'John Doe',
  age: '30',
  bio: 'This person loves traveling and coding.'
};
