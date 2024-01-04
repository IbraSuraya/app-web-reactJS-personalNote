import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiPlusCircle, FiEdit, FiBookmark, FiStar } from 'react-icons/fi';

function Navigation() {
  return (
    <nav className="nav-container">
      <ul>
        <li className="home"><Link to="/"><FiHome className="icon"/></Link></li>
        <li><Link to="/add"><FiPlusCircle className="icon"/></Link></li>
        <li><Link to="/edit"><FiEdit className="icon"/></Link></li>
        <li><Link to="/bookmark"><FiBookmark className="icon"/></Link></li>
        <li><Link to="/favorite"><FiStar className="icon"/></Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;