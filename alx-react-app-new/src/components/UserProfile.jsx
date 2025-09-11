import React from 'react';

export default function UserProfile({ name, age, bio }) {
  return (
    <div style={{
      border: '1px solid gray',
      padding: '12px',
      margin: '12px 0',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      maxWidth: '420px'
    }}>
      <h2 style={{ color: 'blue', fontSize: '1.4rem', margin: '0 0 8px 0' }}>{name}</h2>
      <p style={{ margin: 0 }}>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p style={{ marginTop: '8px' }}>{bio}</p>
    </div>
  );
}

UserProfile.defaultProps = {
  name: 'John Doe',
  age: '30',
  bio: 'This person loves traveling and coding.'
};
