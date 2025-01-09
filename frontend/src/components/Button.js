import React from "react";
import "./Button.css";

const Button = ({ label, onClick, type = "button" }) => (
  <button className="custom-button" type={type} onClick={onClick}>
    {label}
  </button>
);

export default Button;
