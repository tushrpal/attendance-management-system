import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import Reports from './components/Reports';
import Students from './components/Students';
import Navbar from './components/Navbar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/attendance" element={isAuthenticated ? <Attendance /> : <Navigate to="/" />} />
        <Route path="/reports" element={isAuthenticated ? <Reports /> : <Navigate to="/" />} />
        <Route path="/students" element={isAuthenticated ? <Students /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;