import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <div className="head">
          <Navbar.Brand href="/">My App</Navbar.Brand>
          <Nav className="nav">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/">SignUp</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
