import React from 'react';
import UserProfile from './UserProfile';

export default function MainContent() {
  return (
    <main style={{ padding: '10px' }}>
      <section style={{ marginBottom: '10px' }}>
        <UserProfile name="Ada Lovelace" age="28" bio="I enjoy building beautiful user interfaces." />
      </section>

      <section style={{ padding: '10px', backgroundColor: '#f0f0f0', border: '1px solid lightgray' }}>
        <h3 style={{ marginTop: 0 }}>My Favorite Cities</h3>
        <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>I love to visit New York, Paris, and Tokyo.</p>
        <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
          <li>New York</li>
          <li>Paris</li>
          <li>Tokyo</li>
        </ul>
      </section>
    </main>
  );
}
