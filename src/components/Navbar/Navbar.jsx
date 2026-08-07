import "./Navbar.css";
import logo from "../../assets/images/logo-navbar.svg";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <a href="#science" className="navbar__logo">
          <img src={logo} alt="" className="navbar__logo-img" />
          <span className="navbar__title">RewirePulse</span>
        </a>
        <button
          className={`navbar__toggle ${menuOpen ? "active" : ""}`}
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          id="navbar-menu"
          className={`navbar__menu ${menuOpen ? "navbar__menu--active" : ""}`}
        >
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="navbar__link"
              href="#science"
            >
              Science
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="navbar__link"
              href="#howitworks"
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              className="navbar__link"
              href="#pricing"
            >
              Pricing
            </a>
          </li>
          <li>
            <a className="navbar__link" href="/app">
              Portal
            </a>
          </li>
          <li className="navbar__menu-cta">
            <a href="/register" className="navbar__cta-button">
              START REWIRING
            </a>
          </li>
        </ul>
        <div className="navbar__cta">
          <a href="/register" className="navbar__cta-button">
            START REWIRING
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
