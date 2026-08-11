import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        EARTH
      </a>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#explore" onClick={closeMenu}>Explore</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#future" onClick={closeMenu}>Future</a>
      </div>

      <a href="#explore" className="navbar-button">
        Discover
      </a>

      <button
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar