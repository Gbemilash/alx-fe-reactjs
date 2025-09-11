import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      marginTop: '20px'
    }}>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} My Favorite Cities. All rights reserved.
      </p>
    </footer>
  );
}
