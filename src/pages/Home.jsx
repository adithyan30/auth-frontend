import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/Home.css";

const Home = () => {
  return (
    <Container>
      <h1>Welcome to our Website</h1>
      <p>we are here to serve you</p>
      <Button variant="primary" type="submit">
        Get Started
      </Button>
    </Container>
  );
};

export default Home;
