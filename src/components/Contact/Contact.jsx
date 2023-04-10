import "./Contact.scss";

function Contact() {
    return <section className="contact container" id="contact-section" data-scroll-section>
    <div className="contact__banner">
      <h2>Get in touch</h2>
      <p>
        Please don't hesitate to drop me an email if you have
        any questions or would like to know what kind of
        services I can offer.
      </p>
      <a
        className="btn btn-primary"
        href="mailto:olicrossland@gmail.com"
      >
        <span className="text text--one">Get in touch</span>
        <span className="text text--two">Get in touch</span>
      </a>
    </div>
  </section>;
}

export default Contact;