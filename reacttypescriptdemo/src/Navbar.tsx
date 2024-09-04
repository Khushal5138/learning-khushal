import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/user/id">User Profile</Link></li> 
      </ul>
    </nav>
  );
};

export default NavBar;
