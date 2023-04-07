import { useEffect, useState, useRef } from "react";
import uuid from "react-uuid";
import "./App.scss";
import { projectsData } from "./data/projects";
import { experiences } from "./data/experiences";
import { gallery } from "./data/gallery";

// Framer
import { motion, AnimatePresence } from "framer-motion";

// Locomotive Scroll
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

// Swiper
import { Navigation, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/effect-fade";

// Vidstack
import "vidstack/styles/defaults.css";
import { MediaOutlet, MediaPlayer } from "@vidstack/react";

import Navbar from "./components/Navbar/Navbar";
import Filters from "./components/Filters/Filters";

import imgOne from "./assets/img/image-1.png";
import imgTwo from "./assets/img/image-2.png";
import imgThree from "./assets/img/image-3.png";
import imgFour from "./assets/img/image-4.png";
import Selfie from "./assets/img/selfie.png";
import { ReactComponent as ScrollIndicator } from "./assets/img/scroll-down-indicator.svg";
import Project from "./components/Project/Project";

function App({ ref }) {
	const [projects, setProjects] = useState(projectsData);
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [activeFilter, setActiveFilter] = useState("All");

	console.log(projects);

	const removeDuplicatedCategories = (a) => {
		var seen = {};
		return a.filter(function (item) {
			return seen.hasOwnProperty(item) ? false : (seen[item] = true);
		});
	};

	const categories = [
		...new Set(
			projects.map((project) => {
				return project.tags;
			})
		),
	].flat(1);

	let filteredTags = removeDuplicatedCategories(categories);
	console.log(filteredTags);

	useEffect(() => {
		setFilteredProjects(projectsData);
	}, []);


	return (
      <div className="App container">
        <Navbar />
        <section className="hero">
          <h1>
            <span>Digital Obsessive &</span>
            <span>Creative Videographer</span>
          </h1>
          <a className="btn btn-primary">
            <span className="text text--one">Scroll for more</span>
            <span className="text text--two">Scroll for more</span>
          </a>
          <div className="hero__images">
            <div className="hero__img">
              <img src={imgFour} alt="penguins" />
            </div>
            <div className="hero__img">
              <img src={imgTwo} alt="person filming" />
            </div>
            <div className="hero__img">
              <img src={imgThree} alt="djing" />
            </div>
            <div className="hero__img">
              <img src={imgOne} alt="music video filming" />
            </div>
          </div>
        </section>
        <section className="about">
          <header className="about__header">
            <p>About me</p>
            <h2>
              <span>Capturing engaging and </span>
              <span>intimate narratives via the </span>
              <span>
                medium of <span className="sketch">video</span>
              </span>
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
              <a className="btn btn-secondary" href="">
                <span className="text text--one">Get in touch</span>
                <span className="text text--two">Get in touch</span>
              </a>
            </div>
            <div className="about__image">
              <img src={Selfie} alt="picture of me" />
              <ScrollIndicator className="scroll-indicator" />
            </div>
          </div>
        </section>
        <section className="featured">
          <MediaPlayer
            src="https://media-files.vidstack.io/720p.mp4"
            poster="https://media-files.vidstack.io/poster.png"
            controls
          >
            {/* ^ remove `controls` attribute if you're designing a custom UI */}
            <MediaOutlet />
          </MediaPlayer>
        </section>
        <section className="portfolio">
          <h2>My work</h2>
          <Filters
            projects={projects}
            tags={filteredTags}
            setFilteredProjects={setFilteredProjects}
            tagSelected={activeFilter}
            setTagSelected={setActiveFilter}
          />
          <motion.div layout className="portfolio__projects">
            <AnimatePresence>
              {filteredProjects.map((project) => {
                return <Project key={uuid()} project={project} />;
              })}
            </AnimatePresence>
          </motion.div>
        </section>
        <section className="experiences">
          <h2>Experiences</h2>
          {experiences.map((experience) => {
            return (
              <div className="experience">
                <div className="experience__role">
                  <h3>{experience.role}</h3>
                  <p>@{experience.company}</p>
                </div>
                <div className="experience__date">
                  <p>
                    {experience.dateStarted} -{" "}
                    {experience.dateEnded}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
        <section className="gallery">
          <h2>Gallery</h2>
          <div className="swiper">
            {/* <div className="swiper-wrapper">
              {gallery.map(img => {
                return <Swiper>

                </Swiper>
              })}
            </div> */}
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              direction={"horizontal"}
              transition={"fade"}
              modules={[Navigation, EffectFade]}
              speed={300}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              loop={true}
              grabCursor={true}
              watchOverflow={true}
              onSlideChange={() => console.log("slide changed")} 
              centeredSlides={true}
              initialSlide={1}
            >
              {gallery.map(img => {
                return <SwiperSlide key={uuid()}>
                  <img className="gallery__image" src={img.image} alt="" />
                </SwiperSlide>
              })}
            </Swiper>
            <div className="swiper-buttons">
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </section>
        <section className="contact">
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
              Get in touch
            </a>
          </div>
        </section>
        <footer className="footer">
          <small className="footer__copyright">
            &copy; Oli Crossland | 2023
          </small>
          <a
            className="footer__email"
            href="mailto:olicrossland@gmail.com"
          >
            olicrossland@gmail.com
          </a>
          <a className="footer__scroll-btn" href="#">
            <span>Back to top</span>
          </a>
        </footer>
      </div>
	);
}

export default App;
