import "./Footer.scss";

function Footer() {
    return <footer className="footer container">
    <small className="footer__copyright">
      &copy; Oli Crossland | 2023
    </small>
    <a
      className="footer__email"
      href="mailto:olicrossland@gmail.com"
    >
      olicrossland@gmail.com
    </a>
    <a className="footer__scroll-btn" href="#hero-section">
      <span>Back to top</span>
    </a>
  </footer>;
}

export default Footer;