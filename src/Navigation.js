import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <div className="Navigation">
        <img src="logo192.png" alt="My Logo" />    
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Notes</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
  );
}

export default Navigation;
