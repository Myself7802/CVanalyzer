import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <h1>CV Parser Clone</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/get-started">Get started</Link></li>
        <li><Link to="/code-snippet">Code snippet</Link></li>
        <li><Link to="/extracted-data">Extracted data</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
      </ul>
      <div className="auth-buttons">
        <button className="sign-up">Sign up</button>
        <button className="log-in">Log in</button>
      </div>
    </nav>
  );
}

export default Sidebar;