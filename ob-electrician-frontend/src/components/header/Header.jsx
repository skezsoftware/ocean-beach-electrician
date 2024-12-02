import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <nav className="nav-bar">
      <img src={Logo} alt="logo" className="logo" />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Header;
