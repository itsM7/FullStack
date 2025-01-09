import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main login page */}
        <Route path="/" element={<AuthPage />} />
        
        {/* Home page */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Forgot password page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Reset password page */}
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
