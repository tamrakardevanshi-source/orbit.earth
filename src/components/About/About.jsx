import './About.css'
function About() {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <p className="about-label">OUR HOME</p>

        <h2>
          Earth isn't just a planet.
          <br />
          It's a living system.
        </h2>
      </div>

     <div className="about-content">
  <p className="about-description">
    A world shaped by oceans, land, atmosphere, and life.
    Every part of Earth works together to create the home we share.
  </p>

  <div className="about-system">
    <div className="about-system-ring about-system-ring-one"></div>
    <div className="about-system-ring about-system-ring-two"></div>

    <div className="about-system-core">
      <span>EARTH</span>
      <small>SYSTEM</small>
    </div>

    <span className="about-system-node about-system-node-one"></span>
    <span className="about-system-node about-system-node-two"></span>
    <span className="about-system-node about-system-node-three"></span>
  </div>

  <div className="about-stats">
    <div className="about-stat">
      <span>01</span>
      <strong>71%</strong>
      <p>Oceans</p>
    </div>

    <div className="about-stat">
      <span>02</span>
      <strong>7</strong>
      <p>Continents</p>
    </div>

    <div className="about-stat">
      <span>03</span>
      <strong>4.5B</strong>
      <p>Years old</p>
    </div>
  </div>
</div>
    </section>
  )
}

export default About