import React from 'react';
import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './components/MainContent';
import Counter from './components/Counter';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Jane Doe" age={28} bio="I love coding and traveling." />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
