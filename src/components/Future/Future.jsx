import './Future.css'

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

      <div className="future-visual">
        <div className="future-orbit future-orbit-one"></div>
        <div className="future-orbit future-orbit-two"></div>
        <div className="future-orbit future-orbit-three"></div>

        <div className="future-core"></div>

        <div className="future-marker future-marker-one">
          <span>2030</span>
        </div>

        <div className="future-marker future-marker-two">
          <span>2050</span>
        </div>

        <div className="future-marker future-marker-three">
          <span>BEYOND</span>
        </div>

        <div className="future-status">
          <span className="future-status-dot"></span>
          THE NEXT CHAPTER
        </div>
      </div>
    </section>
  )
}

export default Future