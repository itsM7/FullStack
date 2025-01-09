import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import "./Span.css"; // You can create a CSS file for this component if needed

const Span = ({ children, color, onClick }) => {
  const spanStyle = {
    cursor: "pointer",
    color: color || "#007bff", // Default color if no color is provided
  };

  return (
    <span onClick={onClick} style={spanStyle}>
      {children}
    </span>
  );
};

// Prop validation
Span.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Span;
