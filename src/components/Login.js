import React, { useState } from "react";
import { Container, TextField, Button, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (
      userDetails &&
      userDetails.email === email &&
      userDetails.password === password
    ) {
      localStorage.setItem("user", "loggedIn");
      navigate("/dashboard"); // Redirect to dashboard on successful login
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <>
      <Navbar isLoggedIn={false} />
      <Container maxWidth="xs" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography align="center" sx={{ mt: 2 }}>
          <Link href="/register" underline="hover">
            New User? Register here
          </Link>
        </Typography>
      </Container>
    </>
  );
};

export default Login;
