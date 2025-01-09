import React from "react";
import "./Message.css";

const Message = ({ text, type }) => (
  <p className={`message ${type}`}>{text}</p>
);

export default Message;
