// Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/jp.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-header">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}><FaHome /> HOME</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}><FaUserAlt /> ABOUT</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}><FaProjectDiagram /> PROJECTS</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}><FaEnvelope /> CONTACT</Link></li>
        </ul>

        {/* Hamburger / Close Icon */}
        <div 
          className={`hamburger ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
