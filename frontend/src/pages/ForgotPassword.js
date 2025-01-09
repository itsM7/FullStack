import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Message from "../components/Message";
import Span from "../components/Span";
import { useNavigate } from "react-router-dom";
import PasswordService from "../services/PasswordService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const message = await PasswordService.sendResetCode(email);
      setMessage({ text: message, type: "success" });
      navigate("/reset-password", { state: { email } });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 
        error.message || 
        "An unexpected error occurred. Please try again.";
      setMessage({ text: errorMessage, type: "error" });
    }
  };
  

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button label="Send Code" type="submit" />
      </form>
      {message && <Message text={message.text} type={message.type} />}
      
      {/* Back to Login Button */}
      <p>
        <Span onClick={() => navigate("/")}>
          Back to Login
        </Span>
      </p>
    </div>
  );
};

export default ForgotPassword;
