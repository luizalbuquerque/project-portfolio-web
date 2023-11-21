import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Importe o CSS personalizado

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu-title">Menu</div>
      <ul>
        <li>
          <Link to="/members" className="menu-item">Members</Link>
        </li>
        <li>
          <Link to="/person" className="menu-item">Person</Link>
        </li>
        <li>
          <Link to="/project" className="menu-item">Project</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
