import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/HomePage.css';

const HomePage = () => {
  const [isLightMode, setIsLightMode] = useState(false); // الوضع الافتراضي

  const toggleTheme = () => {
    setIsLightMode((prev) => !prev); // تبديل الوضع
  };

  return (
    <div className={`homepage ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <Sidebar isLightMode={isLightMode} />
      <div className="main-content">
        {/* زر التبديل */}
        <div className="theme-toggle-container">
          <button onClick={toggleTheme} className="theme-toggle">
            {isLightMode ? (
              <i className="icon-sun">☀️</i>
            ) : (
              <i className="icon-moon">🌙</i>
            )}
          </button>
        </div>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default HomePage;
