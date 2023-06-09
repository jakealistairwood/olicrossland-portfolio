import { useEffect, useState, useRef } from "react";
import uuid from "react-uuid";
import "./App.scss";
import { projectsData } from "./data/projects";
import { experiences } from "./data/experiences";
import useLocoScroll from "./hooks/useLocoScroll";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import gsap from "gsap";

import { removeDuplicatedCategories } from "./assets/utils/helpers";

// Framer
import { AnimatePresence, AnimateSharedLayout, LayoutGroup, motion } from "framer-motion";

import Filters from "./components/Filters/Filters";

import Project from "./components/Project/Project";
import Experience from "./components/Experiences/Experiences";
import ScrollTrigger from "gsap/ScrollTrigger";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Featured from "./components/Featured/Featured";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

import { fadeElementInAndUp, staggerChildElements } from "./assets/plugins/framer/animations";
import imageLoaded from "imagesloaded";

gsap.registerPlugin(ScrollTrigger);

function App() {
	const [projects, setProjects] = useState(projectsData);
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [activeFilter, setActiveFilter] = useState("All");

  let ref = useRef(null);
  let featuredRef = useRef(null);

	const categories = [
		...new Set(
			projects.map((project) => {
				return project.tags;
			})
		),
	].flat(1);

	let filteredTags = removeDuplicatedCategories(categories);


  useLocoScroll(true);

	useEffect(() => {
		setFilteredProjects(projectsData);
	}, []);

  // useEffect(() => {
  //   let featuredVideo = featuredRef.current;
  //   gsap.to(featuredVideo, {
  //     scrollTrigger: {
  //       trigger: featuredVideo,
  //       scroller: "[data-scroll-container]",
  //       start: "center 20%",
  //       end: "center 50%",
  //       markers: false
  //     }
  //   })
  // }, []);

	return (
    <div className="App" ref={ref} data-scroll-container>
      <Hero />
      <About />
      <Featured />
      <section className="portfolio container" id="portfolio-section" data-scroll-section>
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
              {filteredProjects.map((project) => <Project key={uuid()} project={project} />)}
            </AnimatePresence>
        </motion.div>
      </section>
      <section className="experiences container" data-scroll-section>
        <h2>Experiences</h2>
        <AnimatePresence>
          {experiences.map((experience) => {
            return (
              <Experience key={uuid()} experience={experience} />
            );
          })}
        </AnimatePresence>
      </section>
      <Gallery />
      <Contact />
      <Footer />
    </div>
	);
}

export default App;
