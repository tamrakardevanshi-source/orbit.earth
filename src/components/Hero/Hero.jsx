import './Hero.css'
import EarthModel from './EarthModel'
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-label">ONE PLANET. ONE HOME.</p>

        <h1>
          The world
          <br />
          we call <span>home.</span>
        </h1>

        <p className="hero-description">
          Explore our planet through a new perspective.
          Discover Earth, its beauty, and the world we share.
        </p>

        <a href="#explore" className="hero-button">
          Explore Earth
        </a>
      </div>

      <div className="hero-visual">
       <div className="earth-glow"></div>
       <EarthModel />
      </div>
    </section>
  )
}

export default Hero