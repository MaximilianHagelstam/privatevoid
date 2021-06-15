import { Link } from 'react-router-dom';
import React from 'react';

const handleSignInClick = () => {
  window.open('http://localhost:8080/auth/github', '_self');
};

const handleLogoutClick = () => {
  window.open('http://localhost:8080/auth/logout', '_self');
};

export const Header = (props) => {
  const { authenticated } = props;

  return (
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      {authenticated ? (
        <li onClick={handleLogoutClick}>Logout</li>
      ) : (
        <li onClick={handleSignInClick}>Login</li>
      )}
    </ul>
  );
};
