import React from 'react';
import UserProfile from './UserProfile';

export default function MainContent() {
  return (
    <main style={{ padding: '10px' }}>
      <section style={{ marginBottom: '10px' }}>
        <UserProfile name="Ada Lovelace" age="28" bio="I enjoy building beautiful user interfaces." />
      </section>

      <section>
        <h3 style={{ marginTop: 0 }}>My Favorite Cities</h3>
        <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
          <li>Paris</li>
          <li>Tokyo</li>
          <li>New York</li>
        </ul>
      </section>
    </main>
  );
}
