export default function Contact() {
  return (
    <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
      <div className="contact-orbit" aria-hidden="true"><span /><span /></div>
      <div className="contact-copy" data-reveal>
        <p className="eyebrow"><span className="eyebrow-line" /> The next chapter starts here</p>
        <h2 id="contact-title">Have a good<br /><em>feeling?</em></h2>
        <p className="contact-description">The best work begins with a conversation. Tell us what you’re imagining—we’d love to hear it.</p>
        <a className="button button-gold contact-button" href="mailto:hello@example.com?subject=Let%E2%80%99s%20create%20something%20remarkable">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
        <span className="email-note">Email placeholder: hello@example.com</span>
      </div>
      <div className="contact-aside" data-reveal>
        <span>Good ideas<br />deserve a good home.</span>
        <span className="aside-star" aria-hidden="true">✳</span>
        <span className="contact-location">Working everywhere<br />Based in London, UK</span>
      </div>
    </section>
  );
}
