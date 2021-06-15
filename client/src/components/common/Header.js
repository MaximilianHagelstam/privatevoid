import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const handleSignInClick = () => {
  window.open('http://localhost:8080/auth/github', '_self');
};

const handleLogoutClick = () => {
  window.open('http://localhost:8080/auth/logout', '_self');
};

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">PrivateVoid</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link onClick={handleLogoutClick}>Logout</Nav.Link>
          <Nav.Link onClick={handleSignInClick}>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
