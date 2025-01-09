import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // استيراد Link
import '../styles/Sidebar.css';

const Sidebar = ({ isLightMode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const themeClass = isLightMode ? 'light-mode' : 'dark-mode';

  return (
    <div className={`sidebar ${themeClass} ${isCollapsed ? 'collapsed' : ''}`}>
      <div>
        <ul>
          <li>
            <button onClick={toggleSidebar} className="toggle-btn">
              {isCollapsed ? '→' : '←'}
            </button>
          </li>
          <li>
            <Link to="/home" className="sidebar-item">
              <i className="icon">🏠</i>
              {!isCollapsed && <span>Home</span>}
            </Link>
          </li>
          <li>
            <Link to="/courses" className="sidebar-item">
              <i className="icon">📚</i>
              {!isCollapsed && <span>Courses</span>}
            </Link>
          </li>
          <li>
            <Link to="/assignments" className="sidebar-item">
              <i className="icon">📝</i>
              {!isCollapsed && <span>Assignments</span>}
            </Link>
          </li>
          <li>
            <Link to="/grades" className="sidebar-item">
              <i className="icon">📊</i>
              {!isCollapsed && <span>Grades</span>}
            </Link>
          </li>
          <li>
            <Link to="/schedule" className="sidebar-item">
              <i className="icon">📆</i>
              {!isCollapsed && <span>Schedule</span>}
            </Link>
          </li>
          <li>
            <Link to="/attendance" className="sidebar-item">
              <i className="icon">🧑‍🎓</i>
              {!isCollapsed && <span>Attendance</span>}
            </Link>
          </li>
          <li>
            <Link to="/announcements" className="sidebar-item">
              <i className="icon">📢</i>
              {!isCollapsed && <span>Announcements</span>}
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <ul>
          <li>
            <Link to="/user-center" className="sidebar-item">
              <i className="icon">👤</i>
              {!isCollapsed && <span>User Center</span>}
            </Link>
          </li>
          <li>
            <Link to="/settings" className="sidebar-item">
              <i className="icon">⚙️</i>
              {!isCollapsed && <span>Settings</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
