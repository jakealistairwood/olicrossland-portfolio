import imgOne from "../../assets/img/image-1.png";
import imgTwo from "../../assets/img/image-2.png";
import imgThree from "../../assets/img/image-3.png";
import imgFour from "../../assets/img/image-4.png";
import { ReactComponent as DecorEl } from "../../assets/img/decor-element.svg";

function Hero() {
    return <section className="hero" id="hero-section" data-scroll-section>
    <DecorEl />
    <h1 className="hero__header" data-scroll>
      <span>Digital Obsessive &</span>
      <span>Creative Videographer</span>
    </h1>
    <a className="btn btn-primary" href="#portfolio-section" data-scroll-to>
      <span className="text text--one">Scroll  for  more</span>
      <span className="text text--two">Scroll  for  more</span>
    </a>
    <div className="hero__images">
      <div className="hero__img" data-scroll data-scroll-speed="3">
        <img src={imgFour} alt="penguins" />
      </div>
      <div className="hero__img" data-scroll data-scroll-speed="1">
        <img src={imgTwo} alt="person filming" />
      </div>
      <div className="hero__img" data-scroll data-scroll-speed="3">
        <img src={imgThree} alt="djing" />
      </div>
      <div className="hero__img" data-scroll data-scroll-speed="1">
        <img src={imgOne} alt="music video filming" />
      </div>
    </div>
  </section>;
}

export default Hero;