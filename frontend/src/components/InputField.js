import React, { useState } from "react";
import "./InputField.css";

const InputField = ({ label, type, value, onChange, name }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="input-field">
      <input
        className="input-element"
        type={type}
        value={value}
        name={name} // Add name attribute
        onChange={onChange}
        required
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(value.length > 0)} // keeps label up if there's content
      />
      <label className={`input-label ${focused || value.length > 0 ? "focused" : ""}`}>
        {label}
      </label>
    </div>
  );
};

export default InputField;