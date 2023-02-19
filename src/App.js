import React from 'react';
import './App.css';
import { useSpring, animated } from 'react-spring';
import Navigation from './Navigation';

function App() {
  const headerProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="App">
      <Navigation />
      <animated.header className="App-header" style={headerProps}>
        <h1>Welcome to My Accomplishments!</h1>
      </animated.header>
      <main>
        <p>This is the home page of my website. Here, I'll showcase my accomplishments and provide resources for others to achieve their goals.</p>
      </main>
    </div>
  );
}

export default App;
