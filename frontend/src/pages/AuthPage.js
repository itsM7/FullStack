import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { login, register } from "../services/authService";
import { useLocation } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Message from "../components/Message";
import Span from "../components/Span";
import "../styles/AuthPage.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggles between login and registration modes
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const location = useLocation();
  const [error, setError] = useState(""); // For displaying error messages
  const [message, setMessage] = useState(""); // For displaying success messages
  const navigate = useNavigate(); // For navigation between routes

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
    }
  }, [location.state]);
  // Updates form fields dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Call the login function from AuthService
        const response = await login(formData.email, formData.password);
        setMessage("Login successful! Redirecting...");
        setError("");
        navigate("/home"); // Navigate to the home page upon successful login
      } else {
        // Call the register function from AuthService
        const response = await register(formData.username, formData.email, formData.password);
        setMessage("Registration successful! You can now log in.");
        setError("");
        setIsLogin(true); // Switch to login mode after successful registration
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="auth-page">
      <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {/* Username field (only shown during registration) */}
        {!isLogin && (
          <InputField
            label="Username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            name="username"
          />
        )}

        {/* Email field */}
        <InputField
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />

        {/* Password field */}
        <InputField
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />

        {/* Submit button */}
        <Button label={isLogin ? "Log In" : "Sign Up"} type="submit" />

        {/* Error and success messages */}
        {error && <Message text={error} type="error" />}
        {message && <Message text={message} type="success" />}
      </form>

      {/* Toggle between login and sign-up */}
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <Span onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Log In"}
        </Span>
      </p>

      {/* Forgot password link (only shown during login) */}
      {isLogin && (
        <p>
          <Span onClick={() => navigate("/forgot-password")}>
            Forgot Password?
          </Span>
        </p>
      )}
    </div>
  );
};

export default AuthPage;
