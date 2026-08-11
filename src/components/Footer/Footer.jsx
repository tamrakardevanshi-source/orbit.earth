import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            EARTH
          </a>

          <p>The world we call home.</p>
        </div>

        <nav className="footer-links">
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#about">About</a>
          <a href="#future">Future</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Earth Experience</span>
        <span>Built with curiosity for our planet.</span>
      </div>
    </footer>
  )
}

export default Footer