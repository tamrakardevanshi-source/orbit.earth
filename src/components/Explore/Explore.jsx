import './Explore.css'
import EarthModel from '../Hero/EarthModel'
function Explore() {
  return (
    <section className="explore" id="explore">
      <div className="explore-header">
        <p className="explore-label">EXPLORE THE PLANET</p>

        <h2>
          Discover the systems
          <br />
          that make Earth unique.
        </h2>
      </div>

      <div className="explore-content">
        <div className="explore-card">
          <span>01</span>
          <h3>Atmosphere</h3>
          <p>
            A protective layer of gases that makes life on Earth possible.
          </p>
        </div>

        <div className="explore-center">
           <EarthModel />
        </div>

        <div className="explore-card">
          <span>02</span>
          <h3>Oceans</h3>
          <p>
            Covering most of our planet, oceans regulate climate and support life.
          </p>
        </div>

        <div className="explore-card">
          <span>03</span>
          <h3>Land</h3>
          <p>
            Continents and landscapes create diverse environments for life to thrive.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Explore