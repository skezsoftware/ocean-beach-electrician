import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">OB Electrician Logo</div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Header;
