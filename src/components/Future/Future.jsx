import './Future.css'
import EarthModel from '../Hero/EarthModel'

function Future() {
  return (
    <section className="future" id="future">
      <div className="future-content">
        <p className="future-label">THE FUTURE</p>

        <h2>
          The planet we leave
          <br />
          starts with <span>what we do.</span>
        </h2>

        <p className="future-description">
          Every choice shapes the world ahead. Understanding our planet
          is the first step toward protecting it.
        </p>

        <a href="#home" className="future-button">
          Back to Earth
        </a>
      </div>

      <div className="future-earth">
        <EarthModel />
      </div>
    </section>
  )
}

export default Future