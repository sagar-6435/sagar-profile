import '../styles/navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/#about-me" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/#tech-stack" className="nav-link">Skills</Link>
        </li>
      </ul>
    </nav>
  );
};
