import { useEffect } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import uuid from "react-uuid";
import "./Project.scss";
import { Link } from "react-router-dom";

import { convertStrToUrl } from "../../assets/utils/helpers";

function Project({ project, fadeElementIn, staggerElements }) {

  let projectUrl = convertStrToUrl(project.title);

  let easing = [0.6, -0.05, 0.01, 0.99];

  // const staggerElements = {
  //   animate: {
  //     transition: {
  //       when: "beforeChildren",
  //       staggerChildren: 0.6
  //     }
  //   }
  // }

  // const fadeElementIn = {
  //   initial: {
  //     opacity: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: easing
  //     }
  //   },
  //   animate: {
  //     opacity: 1,
  //     transition: {
  //       duration: 0.6,
  //       ease: easing
  //     }
  //   }
  // }

	return (
    <motion.div
      className="project"
      layout
      variants={fadeElementIn}
      whileTap={{ scale: 0.95 }}
      whileHover={{ 
        scale: 1.02, 
        transition: {
          duration: 0.3,
          ease: easing
        } 
      }}
      href="#"
      style={{
        backgroundImage: `url(${project.image})`
      }}
    >
      <Link className="project__container" to={`projects/${projectUrl}`}>
          {/* <img src={project.image} alt="" className="project__image" /> */}
          <motion.div variants={staggerElements} className="project__info">
            <motion.h4 whileInView={fadeElementIn}>{project.subtitle}</motion.h4>
            <motion.h3 variants={fadeElementIn}>{project.title}</motion.h3>
            <motion.div variants={staggerElements} className="project__tags">
              {project.tags.map(tag => {
                return <motion.p variants={fadeElementIn} key={uuid()} className="project__tag">{tag}</motion.p>
              })}
            </motion.div>
          </motion.div>
      </Link>
    </motion.div>
	);
}

export default Project;
