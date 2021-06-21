import React from 'react';
import { Link } from 'react-router-dom';

const handleSignInClick = () => {
  window.open('http://localhost:8080/auth/github', '_self');
};

const handleLogoutClick = () => {
  window.open('http://localhost:8080/auth/logout', '_self');
};

export const Header = () => {
  return (
    <nav className="navbar bg-light navbar-expand-lg navbar-light">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/articles" className="nav-link">
            Articles
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/add" className="nav-link">
            Add Article
          </Link>
        </li>
        <li className="navbar-item">
          <Link onClick={handleSignInClick} className="nav-link">
            Login
          </Link>
        </li>
        <li className="navbar-item">
          <Link onClick={handleLogoutClick} className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};
