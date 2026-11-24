export default function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow hero-kicker"><span className="eyebrow-line" /> Independent creative studio · Est. 2018</p>
        <h1 className="hero-title" id="hero-title">
          <span className="hero-title-line">DESIGNED</span>
          <span className="hero-title-line title-indent">BEYOND <em>LIMITS</em></span>
        </h1>
        <p className="hero-copy">
          We shape ambitious ideas into identities and digital experiences with a lasting point of view.
        </p>
        <div className="hero-actions">
          <a className="button button-gold" href="#work">
            Explore our work <span aria-hidden="true">↘</span>
          </a>
          <span className="hero-caption">Thoughtfully made. Never ordinary.</span>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="visual-glow" />
        <div className="orbital-object">
          <div className="orbital-ring ring-one" />
          <div className="orbital-ring ring-two" />
          <div className="orbital-core"><span>N</span></div>
          <span className="orbit-point point-one" />
          <span className="orbit-point point-two" />
        </div>
        <span className="visual-index">N° 01 — 26</span>
      </div>
      <a className="scroll-cue" href="#work"><span /> Scroll to discover</a>
      <span className="hero-side-note" aria-hidden="true">A NEW PERSPECTIVE / 01</span>
    </section>
  );
}
