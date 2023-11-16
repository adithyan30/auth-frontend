import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import API_URL from "../../config/global";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${API_URL}/login`, formData);
    console.log(response);
    if (response.data === "invalid user name or password") {
      alert("invalid user name or password");
    } else if (response.data === "server busy") {
      alert("verify your email or password");
    } else if (response?.status) {
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/home");
    }
  };

  return (
    <Container>
      <h1>Login Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          ></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <p>
          Not a user ?<Link to={"/"}>SignUp</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
