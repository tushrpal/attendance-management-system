import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><button onClick={onLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;