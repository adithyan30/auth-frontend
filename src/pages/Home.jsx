import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/Home.css";
import axios from "axios";
import API_URL from "../../config/global";

const Home = () => {
  const [res, setRes] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user && user.token) {
      getData(user.token);
    }
  }, []);

  const getData = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };

      const response = await axios.get(`${API_URL}/home`, config);
      console.log(response);

      if (response.data === "invalid token") {
        alert("login again");
      } else if (response.data === "server busy") {
        alert("unuthorized access");
      } else if (response?.status) {
        setRes(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <h1>Welcome to our Website</h1>
      <br />
      <p>we are here to serve you</p>
      <p>{res.name}</p>

      <br />
      <Button variant="primary" type="submit">
        Get Started
      </Button>
    </Container>
  );
};

export default Home;
