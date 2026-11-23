export default function About() {
  return (
    <section className="about-section section-wrap" id="studio" aria-labelledby="about-title">
      <div className="about-topline" data-reveal>
        <p className="eyebrow"><span className="eyebrow-line" /> A little about us</p>
        <span className="about-coordinate">51°30'26.4"N&nbsp; 00°07'39.6"W</span>
      </div>
      <div className="about-content" data-reveal>
        <div className="about-mark" aria-hidden="true"><span>N</span><i /></div>
        <h2 id="about-title">The future belongs<br />to those who <em>imagine</em><br />it differently.</h2>
        <div className="about-bottom">
          <span className="about-rule" />
          <p>NOVA is an independent creative studio partnering with people who see possibility where others see the familiar. We bring clarity to ambition—through thoughtful strategy, distinctive identity and digital craft.</p>
          <span className="about-signature">Curiosity, always. <span>— Team NOVA</span></span>
        </div>
      </div>
      <span className="about-asterisk" aria-hidden="true">✳</span>
    </section>
  );
}
