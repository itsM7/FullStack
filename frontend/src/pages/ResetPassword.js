import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Message from "../components/Message";
import { useLocation } from "react-router-dom";
import PasswordService from "../services/PasswordService";
import { useNavigate } from "react-router-dom";


const ResetPassword = () => {
  const location = useLocation();
  const email = location.state?.email; // استعادة البريد من state
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (newPassword !== confirmPassword) {
      setMessage({ text: "Passwords do not match.", type: "error" });
      return;
    }
  
    try {
      const responseMessage = await PasswordService.resetPassword(email, code, newPassword);
      setMessage({ text: responseMessage, type: "success" });
      navigate("/", { state: { message: "Password changed successfully. Please log in." } });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 
        error.message || 
        "An unexpected error occurred.";
      setMessage({ text: errorMessage, type: "error" });
    }    
  };
  

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <InputField
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <InputField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button label="Reset Password" type="submit" />
      </form>
      {message && <Message text={message.text} type={message.type} />}
    </div>
  );
};

export default ResetPassword;