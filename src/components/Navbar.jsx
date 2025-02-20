import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/jp.png"; // Import your logo

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side: Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Right side: Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;