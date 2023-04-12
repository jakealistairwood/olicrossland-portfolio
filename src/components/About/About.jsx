import { ReactComponent as ScrollIndicator } from "../../assets/img/scroll-down-indicator.svg";
import Selfie from "../../assets/img/selfie.png";

function About() {
    return <section className="about container" id="about-section" data-scroll-section>
    <header className="about__header" data-scroll data-scroll-speed="-1">
      <p>About me</p>
      <h2>
        <p>Capturing engaging and </p>
        <p>intimate narratives via the </p>
        <p>
          medium of 
          <p className="sketch">
            <span> video</span>
          </p>
        </p>
      </h2>
    </header>
    <div className="about__body">
      <div className="about__content">
        <p>
          Vorem ipsum dolor sit amet, consectetur adipiscing
          elit. Etiam eu turpis molestie, dictum est a, mattis
          tellus. Sed dignissim, metus nec fringilla accumsan,
          risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit
          amet feugiat lectus. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos
          himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut
          rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
          urna. Curabitur vel bibendum lorem. Morbi convallis
          convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </p>
        <p>
          Curabitur tempor quis eros tempus lacinia. Nam
          bibendum pellentesque quam a convallis. Sed ut
          vulputate nisi. Integer in felis sed leo vestibulum
          venenatis. Suspendisse quis arcu sem. Aenean feugiat
          ex eu vestibulum vestibulum.
        </p>
        <a className="btn btn-secondary" href="#contact-section" data-scroll-to>
          <span className="text text--one">Get in touch</span>
          <span className="text text--two">Get in touch</span>
        </a>
      </div>
      <div className="about__image">
        <img src={Selfie} alt="picture of me" />
        <ScrollIndicator className="scroll-indicator" />
      </div>
    </div>
  </section>;
}

export default About;