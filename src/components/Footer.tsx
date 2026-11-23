const footerLinks = [
  { href: '#work', label: 'Work' },
  { href: '#studio', label: 'Studio' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-wrap">
        <a className="footer-wordmark" href="#home" aria-label="NOVA, back to top">NOVA<span>®</span></a>
        <p>Independent by nature.<br />Infinite by design.</p>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="back-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </div>
      <div className="footer-bottom section-wrap">
        <span>© {new Date().getFullYear()} NOVA Studio. All rights reserved.</span>
        <span>Made with intention <i aria-hidden="true">✳</i></span>
      </div>
    </footer>
  );
}
